/* hibiscus2.com chat window. Loaded by site.js, which passes window.H2_CHAT
   ({ lang, ref, waNumber, waText, push }). Answers come from /api/chat; the visitor's
   name and WhatsApp number go to the same Web3Forms inbox as the site's forms, with the
   conversation attached. Analytics events carry no message text or personal details. */
(function () {
  "use strict";
  var cfg = window.H2_CHAT || {};
  var lang = ["en", "zh", "ms", "ja"].indexOf(cfg.lang) >= 0 ? cfg.lang : "en";
  var push = cfg.push || function () {};
  var FORM_KEY = "94ad1e91-a32c-4338-b45d-9bc58ef6d385"; // public Web3Forms key, same as the lead forms
  var PRIVACY = { en: "/privacy-policy/", zh: "/zh/privacy-policy/", ms: "/ms/privacy-policy/", ja: "/ja/privacy-policy/" }[lang];
  var STORE = "h2_chat_v1";
  var MAX_USER = 12;

  // TEXT START (visitor-facing text, scanned by tools/check_chat.py)
  var T = {
    en: {
      title: "Lexis Hibiscus 2", sub: "Automated assistant · consultant follows up",
      hello: "Hi! I'm the automated assistant for Lexis Hibiscus 2, the new private-pool villa project in Port Dickson. Are you looking to buy a villa, or planning a holiday stay?",
      chips: ["Villa sizes and prices", "How the rental programme works", "Book a viewing", "I want a holiday stay"],
      placeholder: "Type your question…", send: "Send", close: "Close chat", open: "Chat with us",
      formTitle: "Book a viewing", date: "Preferred date", time: "Preferred time", loc: "Preferred showroom", choose: "Choose…", slots: ["10am – 12pm", "12pm – 2pm", "2pm – 4pm"], locs: ["Imperial Lexis Kuala Lumpur, Level 7", "Lexis Hibiscus Port Dickson Sales Gallery"], badDate: "Please choose a date.", badTime: "Please choose a time.", badLoc: "Please choose a showroom.", confirm: "Our consultant confirms your appointment on WhatsApp.",
      name: "Your name", phone: "WhatsApp number", phoneHint: "+60 12 345 6789",
      consent: "By sending, you agree that Summerfield Property (M) Sdn. Bhd. may contact you on WhatsApp about Lexis Hibiscus 2, and receives this chat. See our", privacy: "privacy policy",
      submit: "Send my details", leave: "Leave my number", wa: "WhatsApp us instead",
      thanks: "Thank you! Our consultant, Joe Wong (REN 51947), will message you on WhatsApp during office hours. Want to start now?",
      waNow: "Message Joe on WhatsApp", badPhone: "Please enter a WhatsApp number we can reach.", badName: "Please enter your name.",
      sendFail: "Sorry, that didn't send. Please try again, or WhatsApp us.", typing: "Typing…", limit: "Thanks for chatting! For anything else, leave your number or WhatsApp our consultant.",
      note: "Answers are general information about the project, not advice.",
    },
    zh: {
      title: "马来西亚大红花2.0", sub: "自动助手 · 顾问随后联系您",
      hello: "您好！我是马来西亚大红花2.0（Lexis Hibiscus 2）的自动助手，这是波德申全新的私人泳池别墅项目。请问您是想购买别墅，还是计划度假入住？",
      chips: ["别墅面积与价格", "租赁计划如何运作", "预约参观", "我想度假入住"],
      placeholder: "请输入您的问题…", send: "发送", close: "关闭聊天", open: "在线咨询",
      formTitle: "预约参观", date: "首选日期", time: "首选时间", loc: "首选展厅", choose: "请选择…", slots: ["上午10点 – 中午12点", "中午12点 – 下午2点", "下午2点 – 4点"], locs: ["吉隆坡 Imperial Lexis，7楼", "波德申 Lexis Hibiscus 销售展厅"], badDate: "请选择日期。", badTime: "请选择时间。", badLoc: "请选择展厅。", confirm: "顾问会通过WhatsApp与您确认预约。",
      name: "您的姓名", phone: "WhatsApp号码", phoneHint: "+60 12 345 6789",
      consent: "提交即表示您同意Summerfield Property (M) Sdn. Bhd.通过WhatsApp就马来西亚大红花2.0与您联系，并接收本次聊天记录。详见", privacy: "隐私政策",
      submit: "提交我的资料", leave: "留下我的号码", wa: "改用WhatsApp联系",
      thanks: "谢谢！我们的顾问 Joe Wong（REN 51947）将在办公时间通过WhatsApp联系您。想现在就开始吗？",
      waNow: "通过WhatsApp联系Joe", badPhone: "请输入可联系的WhatsApp号码。", badName: "请输入您的姓名。",
      sendFail: "抱歉，提交失败。请重试，或通过WhatsApp联系我们。", typing: "正在输入…", limit: "感谢您的咨询！如有其他问题，请留下号码或通过WhatsApp联系我们的顾问。",
      note: "回答仅为项目的一般信息，并非建议。",
    },
    ms: {
      title: "Lexis Hibiscus 2", sub: "Pembantu automatik · perunding akan menghubungi",
      hello: "Hai! Saya pembantu automatik Lexis Hibiscus 2, projek vila kolam renang persendirian baharu di Port Dickson. Anda ingin membeli vila, atau merancang percutian?",
      chips: ["Saiz dan harga vila", "Cara program sewaan berfungsi", "Tempah lawatan", "Saya mahu bercuti"],
      placeholder: "Taip soalan anda…", send: "Hantar", close: "Tutup sembang", open: "Sembang dengan kami",
      formTitle: "Tempah lawatan", date: "Tarikh pilihan", time: "Masa pilihan", loc: "Bilik pameran pilihan", choose: "Pilih…", slots: ["10 pagi – 12 tengah hari", "12 tengah hari – 2 petang", "2 petang – 4 petang"], locs: ["Imperial Lexis Kuala Lumpur, Aras 7", "Galeri Jualan Lexis Hibiscus Port Dickson"], badDate: "Sila pilih tarikh.", badTime: "Sila pilih masa.", badLoc: "Sila pilih bilik pameran.", confirm: "Perunding kami akan mengesahkan temujanji anda melalui WhatsApp.",
      name: "Nama anda", phone: "Nombor WhatsApp", phoneHint: "+60 12 345 6789",
      consent: "Dengan menghantar, anda bersetuju Summerfield Property (M) Sdn. Bhd. boleh menghubungi anda melalui WhatsApp tentang Lexis Hibiscus 2, dan menerima sembang ini. Lihat", privacy: "dasar privasi",
      submit: "Hantar butiran saya", leave: "Tinggalkan nombor saya", wa: "Hubungi melalui WhatsApp",
      thanks: "Terima kasih! Perunding kami, Joe Wong (REN 51947), akan menghantar mesej WhatsApp kepada anda pada waktu pejabat. Mahu mula sekarang?",
      waNow: "WhatsApp Joe sekarang", badPhone: "Sila masukkan nombor WhatsApp yang boleh dihubungi.", badName: "Sila masukkan nama anda.",
      sendFail: "Maaf, tidak berjaya dihantar. Sila cuba lagi, atau WhatsApp kami.", typing: "Sedang menaip…", limit: "Terima kasih kerana bersembang! Untuk soalan lain, tinggalkan nombor anda atau WhatsApp perunding kami.",
      note: "Jawapan ialah maklumat am tentang projek, bukan nasihat.",
    },
    ja: {
      title: "Lexis Hibiscus 2", sub: "自動アシスタント・担当者から折り返しご連絡",
      hello: "こんにちは！ポートディクソンのプライベートプール付きヴィラの新プロジェクト、Lexis Hibiscus 2の自動アシスタントです。ヴィラのご購入をご検討ですか、それともご旅行での宿泊をお考えですか？",
      chips: ["ヴィラの広さと価格", "賃貸プログラムの仕組み", "見学の予約", "旅行で宿泊したい"],
      placeholder: "ご質問を入力してください…", send: "送信", close: "チャットを閉じる", open: "チャットで相談",
      formTitle: "見学を予約", date: "ご希望日", time: "ご希望の時間帯", loc: "ご希望のショールーム", choose: "選択してください…", slots: ["午前10時～12時", "午後12時～2時", "午後2時～4時"], locs: ["インペリアル・レクシス・クアラルンプール 7階", "レクシス・ハイビスカス・ポートディクソン セールスギャラリー"], badDate: "日付を選択してください。", badTime: "時間帯を選択してください。", badLoc: "ショールームを選択してください。", confirm: "担当コンサルタントがWhatsAppで予約を確定します。",
      name: "お名前", phone: "WhatsApp番号", phoneHint: "+60 12 345 6789",
      consent: "送信すると、Summerfield Property (M) Sdn. Bhd.がLexis Hibiscus 2についてWhatsAppでご連絡すること、およびこのチャット内容を受け取ることに同意したものとみなされます。詳しくは", privacy: "プライバシーポリシー",
      submit: "送信する", leave: "連絡先を残す", wa: "WhatsAppで連絡",
      thanks: "ありがとうございます！担当コンサルタントのJoe Wong（REN 51947）が営業時間内にWhatsAppでご連絡します。今すぐ始めますか？",
      waNow: "WhatsAppでJoeに連絡", badPhone: "連絡可能なWhatsApp番号を入力してください。", badName: "お名前を入力してください。",
      sendFail: "送信できませんでした。もう一度お試しいただくか、WhatsAppでご連絡ください。", typing: "入力中…", limit: "ご利用ありがとうございました！その他のご質問は、連絡先を残すかWhatsAppで担当者にご連絡ください。",
      note: "回答はプロジェクトの一般的な情報であり、助言ではありません。",
    },
  }[lang];
  // TEXT END

  var CSS =
    ".h2c-root{position:fixed;z-index:9999;right:16px;bottom:16px;font-family:Inter,-apple-system,sans-serif;color:#1b2733}" +
    ".h2c-bubble{display:flex;align-items:center;gap:8px;background:#0e2233;color:#fff;border:0;border-radius:999px;padding:12px 18px;font-weight:600;font-size:14px;box-shadow:0 10px 24px rgba(0,0,0,.22);cursor:pointer}" +
    ".h2c-bubble svg{flex:none}.h2c-root.is-open .h2c-bubble{display:none}" +
    "@media (max-width:767px){.h2c-bubble{display:none}}" +
    ".h2c-panel{display:none;flex-direction:column;width:370px;max-width:calc(100vw - 32px);height:560px;max-height:calc(100vh - 32px);background:#fff;border-radius:16px;box-shadow:0 18px 48px rgba(0,0,0,.28);overflow:hidden}" +
    ".h2c-root.is-open .h2c-panel{display:flex}" +
    "@media (max-width:767px){.h2c-root.is-open{inset:0;right:0;bottom:0}.h2c-root.is-open .h2c-panel{width:100%;max-width:none;height:100%;max-height:none;border-radius:0}}" +
    ".h2c-head{display:flex;align-items:center;gap:10px;background:#0e2233;color:#fff;padding:12px 14px}" +
    ".h2c-head b{display:block;font-size:15px}.h2c-head small{display:block;font-size:11.5px;color:#e7d9bd}" +
    ".h2c-x{margin-left:auto;background:none;border:0;color:#fff;font-size:26px;line-height:1;width:44px;height:44px;cursor:pointer}" +
    ".h2c-log{position:relative;flex:1;overflow-y:auto;padding:14px;background:#f6f2ea;-webkit-overflow-scrolling:touch}" +
    ".h2c-msg{max-width:85%;margin:0 0 10px;padding:9px 12px;border-radius:14px;font-size:14.5px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}" +
    ".h2c-bot{background:#fff;border-bottom-left-radius:4px}.h2c-me{background:#0e2233;color:#fff;margin-left:auto;border-bottom-right-radius:4px}" +
    ".h2c-typing{color:#6b7280;font-style:italic;font-size:13px;margin:0 0 10px}" +
    ".h2c-chips{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 10px}" +
    ".h2c-chip{background:#fff;border:1px solid #c9a96a;color:#0e2233;border-radius:999px;padding:8px 12px;font-size:13.5px;cursor:pointer;min-height:36px}" +
    ".h2c-form{background:#fff;border:1px solid #e7d9bd;border-radius:12px;padding:12px;margin:4px 0 10px;font-size:13.5px}" +
    ".h2c-form b{display:block;margin-bottom:8px}.h2c-form label{display:block;margin:6px 0 2px;font-weight:600;font-size:12.5px}" +
    ".h2c-form input,.h2c-form select{width:100%;box-sizing:border-box;border:1px solid #d6cfc0;border-radius:8px;padding:10px;font-size:16px}" +
    ".h2c-form p{font-size:11.5px;color:#4b5563;margin:8px 0}.h2c-form a{color:#0e2233;text-decoration:underline}" +
    ".h2c-err{color:#b42318;font-size:12.5px;margin-top:4px;min-height:1px}" +
    ".h2c-btn{display:block;width:100%;background:#c9a96a;color:#0e2233;border:0;border-radius:999px;padding:11px;font-weight:700;font-size:14.5px;cursor:pointer;text-align:center;text-decoration:none;box-sizing:border-box}" +
    ".h2c-cb{margin:4px 0 10px}" +
    ".h2c-wa{background:#1fbf5c;color:#fff;margin-top:8px}" +
    ".h2c-foot{border-top:1px solid #eee;padding:8px 10px;background:#fff}" +
    ".h2c-row{display:flex;gap:8px}.h2c-row textarea{flex:1;resize:none;border:1px solid #d6cfc0;border-radius:10px;padding:10px;font:inherit;font-size:16px;height:44px;max-height:110px}" +
    ".h2c-send{background:#0e2233;color:#fff;border:0;border-radius:10px;padding:0 14px;font-weight:600;min-width:64px;cursor:pointer}.h2c-send:disabled{opacity:.5}" +
    ".h2c-links{display:flex;justify-content:space-between;gap:8px;margin-top:6px;font-size:12.5px}" +
    ".h2c-links button,.h2c-links a{background:none;border:0;color:#0e2233;text-decoration:underline;cursor:pointer;padding:6px 0;font:inherit;font-size:12.5px}" +
    ".h2c-note{font-size:10.5px;color:#6b7280;margin-top:2px}";

  var CHAT_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';

  var state = load() || { messages: [], intent: "unknown", lead: false, started: false, formShown: false };
  var busy = false;
  var el = {};

  function load() { try { return JSON.parse(sessionStorage.getItem(STORE)); } catch (e) { return null; } }
  function save() { try { sessionStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* storage blocked: chat still works on this page */ } }
  function make(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function waLink() { return "https://wa.me/" + cfg.waNumber + "?text=" + encodeURIComponent((cfg.waText || "Hi, I'd like to know more about Lexis Hibiscus 2.") + " (Ref: " + cfg.ref + "-CHAT)"); }

  function build() {
    var style = make("style"); style.textContent = CSS; document.head.appendChild(style);
    var root = make("div", "h2c-root"); root.setAttribute("data-nosnippet", "");
    var bubble = make("button", "h2c-bubble"); bubble.type = "button"; bubble.innerHTML = CHAT_ICON; bubble.appendChild(make("span", null, T.open));
    bubble.addEventListener("click", function () { open("float"); });
    var panel = make("div", "h2c-panel"); panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", T.title);
    var head = make("div", "h2c-head"); var ht = make("div"); ht.appendChild(make("b", null, T.title)); ht.appendChild(make("small", null, T.sub)); head.appendChild(ht);
    var x = make("button", "h2c-x", "×"); x.type = "button"; x.setAttribute("aria-label", T.close); x.addEventListener("click", close); head.appendChild(x);
    var log = make("div", "h2c-log"); log.setAttribute("aria-live", "polite");
    var foot = make("div", "h2c-foot"); var row = make("form", "h2c-row");
    var input = make("textarea"); input.rows = 1; input.placeholder = T.placeholder; input.maxLength = 600; input.setAttribute("aria-label", T.placeholder);
    var send = make("button", "h2c-send", T.send); send.type = "submit";
    row.appendChild(input); row.appendChild(send);
    row.addEventListener("submit", function (e) { e.preventDefault(); ask(input.value); });
    input.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(input.value); } });
    var links = make("div", "h2c-links"); var leave = make("button", null, T.leave); leave.type = "button"; leave.addEventListener("click", function () { showForm(true); });
    var wa = make("a", null, T.wa); wa.href = waLink(); wa.target = "_blank"; wa.rel = "noopener noreferrer"; wa.addEventListener("click", waClick);
    links.appendChild(leave); links.appendChild(wa);
    foot.appendChild(row); foot.appendChild(links); foot.appendChild(make("div", "h2c-note", T.note));
    panel.appendChild(head); panel.appendChild(log); panel.appendChild(foot);
    root.appendChild(bubble); root.appendChild(panel); document.body.appendChild(root);
    el = { root: root, log: log, input: input, send: send };
    render();
  }

  function render() {
    el.log.textContent = "";
    el.log.appendChild(make("div", "h2c-msg h2c-bot", T.hello));
    if (!state.messages.length) {
      var chips = make("div", "h2c-chips");
      T.chips.forEach(function (c) { var b = make("button", "h2c-chip", c); b.type = "button"; b.addEventListener("click", function () { ask(c); }); chips.appendChild(b); });
      el.log.appendChild(chips);
    }
    var lastBot = null;
    state.messages.forEach(function (m) {
      var n = make("div", "h2c-msg " + (m.role === "user" ? "h2c-me" : "h2c-bot"), m.content);
      el.log.appendChild(n);
      if (m.role === "assistant") lastBot = n;
    });
    var card = null;
    if (state.lead) card = el.log.appendChild(thanksCard());
    else if (state.formOpen) card = el.log.appendChild(formCard());
    else if (state.formShown) el.log.appendChild(callBackButton());
    // Show the start of the newest answer (or the opened form), not the bottom of the chat
    var target = focusForm && card ? card : lastBot;
    focusForm = false;
    if (target && state.messages.length) el.log.scrollTop = Math.max(0, target.offsetTop - 8); else scroll();
  }
  var focusForm = false;
  function callBackButton() {
    var b = make("button", "h2c-btn h2c-cb", T.formTitle); b.type = "button";
    b.addEventListener("click", function () { showForm(); });
    return b;
  }
  function scroll() { el.log.scrollTop = el.log.scrollHeight; }

  function userTurns() { return state.messages.filter(function (m) { return m.role === "user"; }).length; }

  function ask(text) {
    text = (text || "").trim();
    if (!text || busy) return;
    if (userTurns() >= MAX_USER) { state.messages.push({ role: "user", content: text }, { role: "assistant", content: T.limit }); state.formShown = !state.lead; state.formOpen = !state.lead; focusForm = true; save(); render(); el.input.value = ""; return; }
    if (!state.started) { state.started = true; push("chat_start", { chat_ref: cfg.ref, chat_lang: lang }); }
    state.messages.push({ role: "user", content: text.slice(0, 600) });
    el.input.value = ""; save(); render();
    busy = true; el.send.disabled = true;
    var typing = make("div", "h2c-typing", T.typing); el.log.appendChild(typing); scroll();
    fetch("/api/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ lang: lang, page: location.pathname, messages: state.messages }) })
      .then(function (r) { return r.json(); })
      .catch(function () { return { reply: T.sendFail, offer_contact: true }; })
      .then(function (d) {
        busy = false; el.send.disabled = false;
        state.messages.push({ role: "assistant", content: d.reply || T.sendFail });
        if (d.intent && d.intent !== "unknown") state.intent = d.intent;
        if (d.offer_contact && !state.lead) state.formShown = true;
        save(); render();
      });
  }

  function formCard() {
    var f = make("form", "h2c-form"); f.noValidate = true;
    f.appendChild(make("b", null, T.formTitle));
    var ln = make("label", null, T.name); var n = make("input"); n.name = "name"; n.autocomplete = "name"; n.required = true; ln.htmlFor = n.id = "h2c-name";
    var lp = make("label", null, T.phone); var p = make("input"); p.name = "whatsapp_number"; p.type = "tel"; p.inputMode = "tel"; p.autocomplete = "tel"; p.placeholder = T.phoneHint; lp.htmlFor = p.id = "h2c-phone";
    var ld = make("label", null, T.date); var d = make("input"); d.type = "date"; d.name = "preferred_date"; d.min = dayAfter(); ld.htmlFor = d.id = "h2c-date";
    var lt = make("label", null, T.time); var t = picker("preferred_time", T.slots); lt.htmlFor = t.id = "h2c-time";
    var ll = make("label", null, T.loc); var l = picker("location", T.locs); ll.htmlFor = l.id = "h2c-loc";
    var err = make("div", "h2c-err");
    var c = make("p", null, T.consent + " "); var a = make("a", null, T.privacy); a.href = PRIVACY; a.target = "_blank"; c.appendChild(a); c.appendChild(document.createTextNode("."));
    var b = make("button", "h2c-btn", T.submit); b.type = "submit";
    var note = make("p", null, T.confirm);
    [ln, n, lp, p, ld, d, lt, t, ll, l, err, note, c, b].forEach(function (x) { f.appendChild(x); });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!n.value.trim()) { err.textContent = T.badName; n.focus(); return; }
      if (p.value.replace(/\D/g, "").length < 7) { err.textContent = T.badPhone; p.focus(); return; }
      if (!d.value) { err.textContent = T.badDate; d.focus(); return; }
      if (!t.value) { err.textContent = T.badTime; t.focus(); return; }
      if (!l.value) { err.textContent = T.badLoc; l.focus(); return; }
      err.textContent = ""; b.disabled = true;
      sendLead(n.value.trim(), p.value.trim(), { preferred_date: d.value, preferred_time: t.value, location: l.value }).then(function (ok) {
        if (!ok) { b.disabled = false; err.textContent = T.sendFail; return; }
        state.lead = true; save();
        push("chat_lead", { chat_ref: cfg.ref, chat_lang: lang, chat_intent: state.intent });
        focusForm = true; render();
      });
    });
    return f;
  }

  function thanksCard() {
    var d = make("div", "h2c-form"); d.appendChild(make("div", null, T.thanks));
    var a = make("a", "h2c-btn h2c-wa", T.waNow); a.href = waLink(); a.target = "_blank"; a.rel = "noopener noreferrer"; a.addEventListener("click", waClick);
    d.appendChild(a); return d;
  }

  function dayAfter() { return new Date(Date.now() + 864e5).toLocaleDateString("en-CA", { timeZone: "Asia/Kuala_Lumpur" }); }
  // The inbox always gets the English wording, whatever language the visitor chose
  var EN = { preferred_time: ["10am – 12pm", "12pm – 2pm", "2pm – 4pm"], location: ["Imperial Lexis Kuala Lumpur, Level 7", "Lexis Hibiscus Port Dickson Sales Gallery"] };
  function picker(name, options) {
    var sel = make("select"); sel.name = name;
    [T.choose].concat(options).forEach(function (o, i) { var op = make("option", null, o); op.value = i ? EN[name][i - 1] : ""; sel.appendChild(op); });
    return sel;
  }

  function sendLead(name, phone, booking) {
    var utm = {}; try { utm = JSON.parse(sessionStorage.getItem("lh2_utm") || "{}"); } catch (e) { utm = {}; }
    var transcript = state.messages.map(function (m) { return (m.role === "user" ? "Visitor: " : "Assistant: ") + m.content; }).join("\n\n");
    var body = {
      access_key: FORM_KEY, subject: "Chat booking " + booking.preferred_date + " from hibiscus2.com (Ref " + cfg.ref + "-CHAT)", from_name: "hibiscus2.com chat",
      name: name, whatsapp_number: phone, preferred_date: booking.preferred_date, preferred_time: booking.preferred_time, location: booking.location, ref: cfg.ref + "-CHAT", language: lang, page: location.pathname,
      intent: state.intent, lp_variant: "chat", transcript: transcript || "(no messages, details left straight away)",
      utm_source: utm.utm_source || "", utm_medium: utm.utm_medium || "", utm_campaign: utm.utm_campaign || "", gclid: utm.gclid || "", botcheck: "",
    };
    return fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "content-type": "application/json", accept: "application/json" }, body: JSON.stringify(body) })
      .then(function (r) { return r.json(); }).then(function (d) { return !!(d && d.success); }).catch(function () { return false; });
  }

  function showForm() { if (!state.lead) { state.formShown = true; state.formOpen = true; focusForm = true; save(); render(); var n = el.log.querySelector("input"); if (n && window.matchMedia("(min-width: 768px)").matches) n.focus(); } }
  function waClick() { push("whatsapp_click", { wa_source: "chat", wa_ref: cfg.ref + "-CHAT" }); }

  function open(source) {
    el.root.classList.add("is-open");
    push("chat_open", { chat_source: source || "float", chat_ref: cfg.ref, chat_lang: lang });
    render(); // positions the view on the newest answer now that the panel is visible
    if (window.matchMedia("(min-width: 768px)").matches) el.input.focus();
  }
  function close() { el.root.classList.remove("is-open"); }

  build();
  window.H2Chat = { open: open, icon: CHAT_ICON };
  if (cfg.onReady) cfg.onReady();
})();
