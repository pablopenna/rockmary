import { getBasePath } from "@/lib/basePath";

// Inline script for <head>, so it runs before the page paints. Only when landing on the English home
// page (/), it sends visitors whose browser prefers Spanish (the first of en/es in navigator.languages)
// to /es. Any other path is left alone, including /en and /es, which force a language.
export const localeRedirectScript = `(function () {
  try {
    var base = ${JSON.stringify(getBasePath())};
    if (location.pathname.replace(/\\/(index\\.html)?$/, "") !== base) return;
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      var code = String(langs[i]).slice(0, 2).toLowerCase();
      if (code === "es") location.replace(base + "/es" + location.search + location.hash);
      if (code === "en" || code === "es") return;
    }
  } catch (e) {}
})();`;
