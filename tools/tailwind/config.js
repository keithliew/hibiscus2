// Tailwind 3 config for hibiscus2.com, used only by tools/build_css.py.
// Same colours and font stacks the pages used to set inline for the Play CDN.
// H2_LANG picks the language group: "" (English and Malay), "zh" or "ja".
const lang = process.env.H2_LANG || "";
const site = __dirname + "/../../hibiscus2-site";
const cjk = {
  zh: ['"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"'],
  ja: ['"Hiragino Sans"', '"Hiragino Kaku Gothic ProN"', '"Yu Gothic"', "Meiryo"],
}[lang] || [];
const pages = lang ? [site + "/" + lang + "/**/*.html"] : [site + "/**/*.html", "!" + site + "/zh/**", "!" + site + "/ja/**"];

module.exports = {
  content: [...pages, site + "/js/*.js", "!" + site + "/**/._*"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0e2233", deep: "#081826" },
        gold: { DEFAULT: "#c9a96a", soft: "#e7d9bd" },
        coral: "#e2604b",
        sand: "#f6f2ea",
        ink: "#1b2733",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", ...cjk, "serif"],
        sans: ["Inter", "-apple-system", ...cjk, "sans-serif"],
      },
    },
  },
};
