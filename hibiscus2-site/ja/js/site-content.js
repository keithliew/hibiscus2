/* ============================================================
   Lexis Hibiscus 2 (hibiscus2.com/ja/) — shared CTA button text (JA)
   Mirrors js/site-content.js. Edit a label here and every button
   site-wide on the /ja/ mirror marked with the matching
   data-text-key updates on page load. Keep in sync with the static
   fallback text inside each [data-text-target] span on every /ja/
   page — that fallback is what renders if this script fails to load.
   Native-speaker review pending — see i18n/review-queue-ja.md
   ============================================================ */

(function () {
  "use strict";

  var buttonText = {
    whatsappPrimary: "プライベート内覧のご予約",
    requestCallback: "折り返しのご連絡を依頼",
    formSubmit: "内覧のご案内を依頼",
  };

  document.querySelectorAll("[data-text-key]").forEach(function (el) {
    var key = el.getAttribute("data-text-key");
    var target = el.querySelector("[data-text-target]") || el;
    if (buttonText[key]) target.textContent = buttonText[key];
  });
})();
