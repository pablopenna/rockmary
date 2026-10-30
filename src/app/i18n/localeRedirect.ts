import { getBasePath } from "@/lib/basePath";
import type { Locale } from "./locale.type";

// ?lang=en / ?lang=es picks the page language explicitly; the header's EN/ES links set it so the choice survives reloads.
export const LOCALE_QUERY_PARAM = "lang";

const LOCALE_PATHS: Record<Locale, string> = { en: "/", es: "/es" };

export const localeHref = (locale: Locale) => `${LOCALE_PATHS[locale]}?${LOCALE_QUERY_PARAM}=${locale}`;

// Inline script for <head>, so it runs before the page paints. A valid ?lang= always wins and sends the
// visitor to that language's page. Without one, the English home page sends visitors whose browser
// prefers Spanish (the first of en/es in navigator.languages) to /es.
export const localeRedirectScript = `(function () {
  try {
    var base = ${JSON.stringify(getBasePath())};
    var paths = { en: base + "/", es: base + "/es" };
    var path = location.pathname.replace(/(\\/index)?(\\.html)?\\/?$/, "");
    var page = path === base ? "en" : path === base + "/es" ? "es" : null;
    if (!page) return;
    var match = new RegExp("[?&]${LOCALE_QUERY_PARAM}=([^&]*)").exec(location.search);
    var wanted = match ? decodeURIComponent(match[1]).toLowerCase() : null;
    if (!paths.hasOwnProperty(wanted)) {
      wanted = null;
      if (page !== "en") return;
      var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
      for (var i = 0; i < langs.length && !wanted; i++) {
        var code = String(langs[i]).slice(0, 2).toLowerCase();
        if (paths.hasOwnProperty(code)) wanted = code;
      }
    }
    if (wanted && wanted !== page) location.replace(paths[wanted] + location.search + location.hash);
  } catch (e) {}
})();`;
