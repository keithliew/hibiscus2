/* ============================================================
   Lexis Hibiscus 2 (hibiscus2.com) — shared CTA button text
   Edit a label here and every button site-wide marked with the
   matching data-text-key updates on page load. Keep in sync with
   the static fallback text inside each [data-text-target] span —
   that fallback is what renders if this script fails to load.
   ============================================================ */

(function () {
  "use strict";

  var buttonText = {
    whatsappPrimary: "Book a Private Viewing",
    requestCallback: "Request a Callback",
    formSubmit: "Request a Viewing Callback",
  };

  document.querySelectorAll("[data-text-key]").forEach(function (el) {
    var key = el.getAttribute("data-text-key");
    var target = el.querySelector("[data-text-target]") || el;
    if (buttonText[key]) target.textContent = buttonText[key];
  });
})();
