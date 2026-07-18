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
  var pageWaText = document.body.getAttribute("data-wa-text") || "Hi, I'd like to know more about Lexis Hibiscus 2.";
  var waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(pageWaText);
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
    el.addEventListener("click", function () {
      gtmPush("whatsapp_click", { wa_source: el.getAttribute("data-wa") });
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
    form.addEventListener("submit", function (e) {
      var phone = form.querySelector('input[name="whatsapp_number"]');
      if (phone && phone.value.replace(/\D/g, "").length < 7) {
        e.preventDefault();
        var invalidPhoneText = form.getAttribute("data-invalid-phone-text") || "Enter a valid WhatsApp number so our consultant can reach you.";
        phone.setCustomValidity(invalidPhoneText);
        phone.reportValidity();
        return;
      }
      var honeypot = form.querySelector('input[name="botcheck"]');
      if (honeypot && honeypot.checked) {
        e.preventDefault();
        return;
      }
    });
    var phoneInput = form.querySelector('input[name="whatsapp_number"]');
    if (phoneInput) {
      phoneInput.addEventListener("input", function () {
        phoneInput.setCustomValidity("");
      });
    }
  }
})();
