import { Locale } from ".";
import enTranslations from "./translations/en.json";
import esTranslations from "./translations/es.json";

export const getTranslation = (locale: Locale, key: string) => {
    const translationsFile = getTranslationFile(locale);
    const translation = translationsFile[key];

    return translation !== undefined ? translation : key;
}

const getTranslationFile = (locale: Locale): Record<string, string> => {
    switch(locale) {
        case 'es':
            return esTranslations;
        default:
            return enTranslations;
    }
}

// Page title and description for a locale. Plain hyphens read better in search results than U+2011.
export const getPageMetadata = (locale: Locale) => ({
    title: getTranslation(locale, 'META_TITLE'),
    description: getTranslation(locale, 'HERO_SUBTITLE').replace(/\u2011/g, '-'),
})

// Replaces {placeholder} tokens, e.g. format("{eur} €", { eur: 25 }) -> "25 €"
export const format = (str: string, vars: Record<string, string | number>) =>
    str.replace(/\{(\w+)\}/g, (match, name: string) =>
        vars[name] !== undefined ? String(vars[name]) : match);
