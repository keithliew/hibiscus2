// POST /api/chat: the hibiscus2.com chat assistant.
// The browser sends the conversation so far; we ask Claude for the next reply,
// using only chat/facts.js, then check the reply against the banned terms of
// approved-facts.md before it reaches the visitor. Nothing is stored here: a
// conversation is only kept if the visitor sends their details from the chat window.
//
// Needs the secret ANTHROPIC_API_KEY (Cloudflare Pages > Settings > Variables and secrets),
// added by Keith. Without it the chat still works as a "leave your number" form.
// Raw fetch, not the Anthropic SDK: this repo deploys with no build step or package.json.

import { SYSTEM_PROMPT, contextNote, safeReply, busyReply } from "../../chat/facts.js";
import { BANNED } from "../../chat/banned.js";
import { tooMany, sign, verified } from "../_lib/chat-guard.js";

const SITE = "hibiscus2";

const MODEL = "claude-opus-5-5";
const LANGS = ["en", "zh", "ms", "ja"];
const MAX_TURNS = 24; // messages in one conversation (12 visitor messages)
const MAX_USER_CHARS = 600;
const HOSTS = /^(hibiscus2\.com|(?:[a-z0-9-]+\.)?hibiscus2\.pages\.dev|localhost|127\.0\.0\.1)$/;

const SCHEMA = {
  type: "object",
  properties: {
    reply: { type: "string" },
    intent: { type: "string", enum: ["buy", "stay", "other", "unknown"] },
    offer_contact: { type: "boolean" },
  },
  required: ["reply", "intent", "offer_contact"],
  additionalProperties: false,
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" },
  });

function cleanConversation(messages) {
  if (!Array.isArray(messages) || messages.length < 1 || messages.length > MAX_TURNS) return null;
  const out = [];
  for (let i = 0; i < messages.length; i++) {
    const m = messages[i];
    const role = i % 2 === 0 ? "user" : "assistant";
    if (!m || m.role !== role || typeof m.content !== "string") return null;
    const text = m.content.trim().slice(0, role === "user" ? MAX_USER_CHARS : 1500);
    if (!text) return null;
    out.push({ role, content: text });
  }
  return out[out.length - 1].role === "user" ? out : null;
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("origin") || "";
  let host = "";
  try { host = new URL(origin).hostname; } catch (e) { host = ""; }
  if (!HOSTS.test(host)) return json({ error: "forbidden" }, 403);

  let body;
  try { body = await request.json(); } catch (e) { return json({ error: "bad request" }, 400); }
  const lang = LANGS.includes(body.lang) ? body.lang : "en";
  const page = typeof body.page === "string" ? body.page.slice(0, 80).replace(/[^\w\/\-.]/g, "") : "/";
  let messages = cleanConversation(body.messages);
  if (!messages) return json({ reply: busyReply(lang), intent: "unknown", offer_contact: true, limited: true });
  if (!env.ANTHROPIC_API_KEY) return json({ reply: busyReply(lang), intent: "unknown", offer_contact: true, unavailable: true, reason: "no_key" });
  if (await tooMany(request, SITE)) return json({ reply: busyReply(lang), intent: "unknown", offer_contact: true, limited: true, reason: "rate_limit" });

  // Earlier turns must carry our signature; if they were edited, keep only the latest question
  if (messages.length > 1 && !(await verified(env.ANTHROPIC_API_KEY, SITE, messages.slice(0, -1), body.sig))) {
    console.log("chat: unsigned or edited history, using the last message only");
    messages = messages.slice(-1);
  }
  // Every answer goes back with a signature over the conversation including it
  const answer = async (data) => {
    data.sig = await sign(env.ANTHROPIC_API_KEY, SITE, messages.concat({ role: "assistant", content: data.reply }));
    return json(data);
  };

  let res;
  try {
    res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2026-10-21",
        "anthropic-beta": "server-side-fallback-2026-07-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 2000,
        fallbacks: "default",
        output_config: { effort: "low", format: { type: "json_schema", schema: SCHEMA } },
        system: [
          { type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } },
          { type: "text", text: contextNote(Date.now(), lang, page) },
        ],
        messages,
      }),
    });
  } catch (e) {
    console.log("chat: network error", String(e));
    return answer({ reason: "network", reply: busyReply(lang), intent: "unknown", offer_contact: true, unavailable: true });
  }
  if (!res.ok) {
    const detail = (await res.text()).slice(0, 300);
    console.log("chat: api status", res.status, detail);
    const type = (detail.match(/"type"\s*:\s*"(\w+_error)"/) || [])[1] || "";
    return answer({ reason: "api_" + res.status + (type ? "_" + type : ""), reply: busyReply(lang), intent: "unknown", offer_contact: true, unavailable: true });
  }

  const data = await res.json();
  let out = null;
  if (data.stop_reason !== "refusal") {
    const block = (data.content || []).find((b) => b.type === "text");
    try { out = JSON.parse(block.text); } catch (e) { out = null; }
  }
  if (!out || typeof out.reply !== "string" || !out.reply.trim()) {
    console.log("chat: unusable reply", data.stop_reason);
    return answer({ reply: safeReply(lang), intent: "unknown", offer_contact: true, flagged: true });
  }

  const hit = BANNED.find((re) => re.test(out.reply));
  if (hit) {
    console.log("chat: blocked reply, pattern", String(hit));
    return answer({ reply: safeReply(lang), intent: out.intent || "unknown", offer_contact: true, flagged: true });
  }
  return answer({ reply: out.reply.trim(), intent: out.intent, offer_contact: !!out.offer_contact });
}
