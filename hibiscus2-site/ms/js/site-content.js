/* ============================================================
   Lexis Hibiscus 2 (hibiscus2.com/ms/) — shared CTA button text (MS)
   Mirrors js/site-content.js. Edit a label here and every button
   site-wide on the /ms/ mirror marked with the matching
   data-text-key updates on page load. Keep in sync with the static
   fallback text inside each [data-text-target] span on every /ms/
   page — that fallback is what renders if this script fails to load.
   Native-speaker review pending — see i18n/review-queue-ms.md
   ============================================================ */

(function () {
  "use strict";

  var buttonText = {
    whatsappPrimary: "Tempah Lawatan Peribadi",
    requestCallback: "Mohon Panggilan Semula",
    formSubmit: "Mohon Panggilan untuk Lawatan",
  };

  document.querySelectorAll("[data-text-key]").forEach(function (el) {
    var key = el.getAttribute("data-text-key");
    var target = el.querySelector("[data-text-target]") || el;
    if (buttonText[key]) target.textContent = buttonText[key];
  });
})();
