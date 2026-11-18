/* ============================================================
   Lexis Hibiscus 2 (hibiscus2.com) — shared site bundle
   Replace before launch:
   [WHATSAPP_NUMBER] — intl format, no + or spaces, e.g. 60123456789
   ============================================================ */

(function () {
  "use strict";

  var WHATSAPP_NUMBER = "60122970362"; // TODO [INSERT]: confirm business WhatsApp number

  var dataLayer = (window.dataLayer = window.dataLayer || []);
  function gtmPush(event, extra) {
    var payload = { event: event };
    for (var k in extra) if (Object.prototype.hasOwnProperty.call(extra, k)) payload[k] = extra[k];
    dataLayer.push(payload);
  }

  // ---------- UTM / gclid capture (persist across pages within a session) ----------
  var UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
  (function captureUtm() {
    var params = new URLSearchParams(window.location.search);
    var stored = {};
    try {
      stored = JSON.parse(sessionStorage.getItem("lh2_utm") || "{}");
    } catch (e) {
      stored = {};
    }
    var changed = false;
    UTM_KEYS.forEach(function (key) {
      var val = params.get(key);
      if (val) {
        stored[key] = val;
        changed = true;
      }
    });
    if (changed) {
      try {
        sessionStorage.setItem("lh2_utm", JSON.stringify(stored));
      } catch (e) {
        /* storage unavailable — non-fatal */
      }
    }
    document.querySelectorAll("form.lead-form").forEach(function (form) {
      UTM_KEYS.forEach(function (key) {
        var field = form.querySelector('input[name="' + key + '"]');
        if (field && stored[key]) field.value = stored[key];
      });
    });
  })();

  // ---------- WhatsApp links: build href + track clicks ----------
  // Ref code at the end of every pre-filled message: page, language and ad/web, e.g. "(Ref: VIL-EN-AD)"
  var PAGE_CODES = { "": "HOME", villas: "VIL", "rental-programme": "RP", contact: "CON", about: "ABT", news: "NEWS", events: "EVT", "lexis-track-record": "TR" };
  var pathParts = window.location.pathname.split("/").filter(Boolean);
  var lang = ["zh", "ms", "ja"].indexOf(pathParts[0]) >= 0 ? pathParts.shift() : "en";
  var pageCode = document.body.getAttribute("data-wa-code") || PAGE_CODES[pathParts[0] || ""] || "OTH";
  var utm = {};
  try {
    utm = JSON.parse(sessionStorage.getItem("lh2_utm") || "{}");
  } catch (e) {
    utm = {};
  }
  var fromAd = !!utm.gclid || /^(cpc|ppc|paid)/i.test(utm.utm_medium || "");
  var waRef = pageCode + "-" + lang.toUpperCase() + "-" + (fromAd ? "AD" : "WEB");
  var pageWaText = (document.body.getAttribute("data-wa-text") || "Hi, I'd like to know more about Lexis Hibiscus 2.") + " (Ref: " + waRef + ")";
  var waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(pageWaText);
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
    el.addEventListener("click", function () {
      gtmPush("whatsapp_click", { wa_source: el.getAttribute("data-wa"), wa_ref: waRef });
    });
  });

  // ---------- Programme-details CTA tracking ----------
  document.querySelectorAll("[data-programme-cta]").forEach(function (el) {
    el.addEventListener("click", function () {
      gtmPush("programme_details_request", { cta_source: el.getAttribute("data-programme-cta") || "unspecified" });
    });
  });

  // ---------- lead_form_submit fires on thank-you page load ----------
  if (document.body.getAttribute("data-page") === "thank-you") {
    gtmPush("lead_form_submit", { lp_variant: sessionStorage.getItem("lh2_lp_variant") || "unknown" });
  }

  // ---------- Lead-form funnel: each step goes to the dataLayer (field names and counts only, never what people type) ----------
  document.querySelectorAll("form.lead-form").forEach(function (form) {
    var formName = form.getAttribute("data-lp-variant") || "lead";
    var fields = [].slice.call(form.querySelectorAll("input, select, textarea")).filter(function (el) {
      return el.type !== "hidden" && el.name !== "botcheck";
    });
    var done = {};
    var started = false, submitted = false, seen = false, left = false, lastField = "";
    function send(event, extra) {
      var data = { form_name: formName, fields_total: fields.length, fields_filled: Object.keys(done).length };
      for (var k in extra) data[k] = extra[k];
      gtmPush(event, data);
    }
    function viewed() { if (!seen) { seen = true; send("h2_form_view", {}); } }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries, obs) {
        if (entries[0].isIntersecting) { viewed(); obs.disconnect(); }
      }, { threshold: 0.3 }).observe(form);
    } else {
      viewed();
    }
    fields.forEach(function (el, i) {
      function start() {
        lastField = el.name;
        if (!started) { started = true; viewed(); send("h2_form_start", { first_field: el.name }); }
      }
      el.addEventListener("focus", start);
      el.addEventListener("input", start);
      el.addEventListener("change", function () {
        start();
        if (!el.value || done[el.name]) return;
        done[el.name] = true;
        send("h2_form_field", { field_name: el.name, field_position: i + 1 });
      });
      el.addEventListener("invalid", function () { send("h2_form_error", { field_name: el.name }); });
    });
    form.addEventListener("submit", function () { submitted = true; send("h2_form_submit", {}); });
    window.addEventListener("pagehide", function () {
      if (left || !started || submitted) return;
      left = true;
      send("h2_form_abandon", { last_field: lastField });
    });
  });

  // ---------- Time-limited notices: remove after the end of data-show-until (Malaysia time) ----------
  document.querySelectorAll("[data-show-until]").forEach(function (el) {
    if (Date.now() > new Date(el.getAttribute("data-show-until") + "T23:59:59+08:00").getTime()) el.remove();
  });

  // ---------- Count-up numbers (data-count), run once when scrolled into view ----------
  (function () {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    function show(el, v) {
      var dec = +(el.getAttribute("data-decimals") || 0);
      el.textContent = (el.getAttribute("data-prefix") || "") + v.toLocaleString("en", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + (el.getAttribute("data-suffix") || "");
    }
    function run(el) {
      var end = parseFloat(el.getAttribute("data-count")), t0 = null;
      function step(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / 1400, 1), e = 1 - Math.pow(1 - p, 3);
        var dec = +(el.getAttribute("data-decimals") || 0), f = Math.pow(10, dec);
        show(el, p < 1 ? Math.round(end * e * f) / f : end);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { obs.unobserve(e.target); show(e.target, 0); run(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { obs.observe(el); });
  })();

  // ---------- Mobile nav toggle ----------
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navMenu = document.querySelector("[data-nav-menu]");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var nowHidden = navMenu.classList.toggle("hidden");
      navToggle.setAttribute("aria-expanded", nowHidden ? "false" : "true");
    });
  }

  // ---------- FAQ accordion ----------
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (o) {
        o.classList.remove("open");
        o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ---------- Sticky mobile CTA bar (appears after hero) ----------
  var sticky = document.querySelector(".sticky-bar");
  var hero = document.querySelector(".hero");
  if (sticky && hero) {
    var onScroll = function () {
      if (window.scrollY > hero.offsetHeight * 0.6) {
        sticky.classList.add("visible");
      } else {
        sticky.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  } else if (sticky) {
    sticky.classList.add("visible");
  }

  // ---------- Scroll reveal (respects reduced motion) ----------
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (!reduced && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  // ---------- Lead form: variant stash + validation ----------
  var form = document.querySelector(".lead-form");
  if (form) {
    var variant = form.getAttribute("data-lp-variant");
    if (variant) {
      try {
        sessionStorage.setItem("lh2_lp_variant", variant);
      } catch (e) {
        /* non-fatal */
      }
    }
  }

  // ---------- Lead forms: our own error messages under each field ----------
  // Android in-app browsers (where most Display ad clicks open) often hide the
  // browser's "please fill out this field" bubble, so a tap on Register looked
  // like it did nothing. This runs before every other submit listener, so the
  // funnel only records h2_form_submit when the form really sends.
  var leadForms = [].slice.call(document.querySelectorAll("form.lead-form"));
  function fieldsOf(f) {
    return [].slice.call(f.querySelectorAll("input, select, textarea")).filter(function (el) {
      return el.type !== "hidden" && el.name !== "botcheck";
    });
  }
  function errorAnchor(el) {
    return el.parentNode.classList.contains("flex") ? el.parentNode : el;
  }
  function showError(el, msg) {
    var id = (el.id || el.name) + "-error";
    var p = document.getElementById(id);
    if (!p) {
      p = document.createElement("p");
      p.id = id;
      p.className = "field-error";
      p.setAttribute("role", "alert");
      errorAnchor(el).insertAdjacentElement("afterend", p);
    }
    p.textContent = msg;
    el.setAttribute("aria-invalid", "true");
    el.setAttribute("aria-describedby", id);
  }
  function clearError(el) {
    var p = document.getElementById((el.id || el.name) + "-error");
    if (p) p.remove();
    el.removeAttribute("aria-invalid");
    el.removeAttribute("aria-describedby");
  }
  function phoneMessage(f, phone) {
    return phone.value.replace(/\D/g, "").length < 7
      ? f.getAttribute("data-invalid-phone-text") || "Enter a valid WhatsApp number so our consultant can reach you."
      : "";
  }
  leadForms.forEach(function (f) {
    f.noValidate = true;
    fieldsOf(f).forEach(function (el) {
      el.addEventListener("input", function () {
        if (el.name === "whatsapp_number") el.setCustomValidity("");
        if (el.getAttribute("aria-invalid")) clearError(el);
      });
    });
  });
  window.addEventListener(
    "submit",
    function (e) {
      var f = e.target;
      if (leadForms.indexOf(f) === -1) return;
      var phone = f.querySelector('input[name="whatsapp_number"]');
      if (phone) phone.setCustomValidity(phoneMessage(f, phone));
      var bad = fieldsOf(f).filter(function (el) {
        return !el.checkValidity();
      });
      var honeypot = f.querySelector('input[name="botcheck"]');
      if (!bad.length && !(honeypot && honeypot.checked)) return;
      e.preventDefault();
      e.stopPropagation();
      bad.forEach(function (el) {
        showError(el, el.validationMessage);
      });
      if (bad.length) {
        bad[0].scrollIntoView({ block: "center", behavior: "smooth" });
        bad[0].focus({ preventScroll: true });
      }
    },
    true
  );
})();

/* ---------- Language suggestion (English pages only) ----------
   Never redirects: Google and people on English-set phones keep the English page.
   If the browser prefers Chinese, Malay or Japanese and this page exists in it,
   a small bar offers to switch. "No thanks" or any use of the EN/中文/BM/日本語
   links is remembered on this device. */
(function () {
  "use strict";
  var KEY = "h2_lang_choice";
  var TEXT = {
    "zh-Hans": ["本页面有中文版。", "切换到中文", "不用了"],
    "ms": ["Halaman ini ada dalam Bahasa Malaysia.", "Tukar ke Bahasa Malaysia", "Tidak, terima kasih"],
    "ja": ["このページには日本語版があります。", "日本語で見る", "結構です"]
  };
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return "x"; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function track(name) { (window.dataLayer = window.dataLayer || []).push({ event: name }); }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".lang-switch a, .lang-switch-mobile a");
    if (a) set(a.getAttribute("hreflang") || a.textContent.trim());
  });
  if (document.documentElement.lang !== "en" || get()) return;

  var alt = {};
  [].forEach.call(document.querySelectorAll('link[rel="alternate"][hreflang]'), function (l) {
    alt[l.getAttribute("hreflang")] = l.getAttribute("href");
  });
  function pick(tag) {
    tag = tag.toLowerCase();
    if (tag.indexOf("en") === 0) return "en";
    if (tag.indexOf("zh") === 0) return "zh-Hans";
    if (tag.indexOf("ms") === 0) return "ms";
    if (tag.indexOf("ja") === 0) return "ja";
    return null;
  }
  var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
  var want = null;
  for (var i = 0; i < prefs.length && !want; i++) want = pick(prefs[i]);
  if (!want || want === "en" || !alt[want] || !TEXT[want]) return;

  var t = TEXT[want];
  var css = document.createElement("style");
  css.textContent = ".lang-suggest{background:#081826;color:#fff;font-size:15px}" +
    ".lang-suggest>div{max-width:80rem;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px;padding:10px 16px}" +
    ".lang-suggest a{color:#fff;font-weight:600;background:#E2604B;padding:6px 14px;border-radius:6px;text-decoration:none}" +
    ".lang-suggest button{background:none;border:0;color:#fff;opacity:.8;text-decoration:underline;cursor:pointer;font:inherit;padding:6px 0}";
  document.head.appendChild(css);
  var bar = document.createElement("div");
  bar.className = "lang-suggest";
  bar.setAttribute("lang", want);
  bar.innerHTML = "<div><span></span> <a></a> <button type=\"button\"></button></div>";
  bar.querySelector("span").textContent = t[0];
  var go = bar.querySelector("a");
  go.href = new URL(alt[want], location.href).pathname + location.search + location.hash;
  go.textContent = t[1];
  var no = bar.querySelector("button");
  no.textContent = t[2];
  go.addEventListener("click", function () { set(want); track("h2_lang_suggest_accept"); });
  no.addEventListener("click", function () { set("en"); bar.remove(); track("h2_lang_suggest_dismiss"); });
  document.body.insertBefore(bar, document.body.firstChild);
  track("h2_lang_suggest_shown");
})();
