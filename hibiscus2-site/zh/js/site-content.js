/* ============================================================
   Lexis Hibiscus 2 (hibiscus2.com/zh/) — shared CTA button text (ZH)
   Mirrors js/site-content.js. Edit a label here and every button
   site-wide on the /zh/ mirror marked with the matching
   data-text-key updates on page load. Keep in sync with the static
   fallback text inside each [data-text-target] span on every /zh/
   page — that fallback is what renders if this script fails to load.
   [REVIEW] native check pending — see i18n/review-queue-zh.md
   ============================================================ */

(function () {
  "use strict";

  var buttonText = {
    whatsappPrimary: "预约私人参观",
    requestCallback: "预约回电",
    formSubmit: "预约参观回电",
  };

  document.querySelectorAll("[data-text-key]").forEach(function (el) {
    var key = el.getAttribute("data-text-key");
    var target = el.querySelector("[data-text-target]") || el;
    if (buttonText[key]) target.textContent = buttonText[key];
  });
})();
