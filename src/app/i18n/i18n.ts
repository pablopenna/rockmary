import { Locale } from ".";

export const SUPPORTED_LOCALES = ['en', 'es'] as const;

const enTranslations = require('./translations/en.json');
const esTranslations = require('./translations/es.json');

export const getLocaleFromString = (locale: string): Locale | null => {
    if(SUPPORTED_LOCALES.includes(locale as Locale)) {
        return locale as Locale;
    }
    return null;
}

// TODO: don't be lazy
export const getLocaleFromPathname = (pathname: string): Locale => {
    if(pathname.includes('/es')) {
        return 'es';
    }
    return 'en';
}

export const getTranslation = (locale: Locale, key: string) => {
    const translationsFile = getTranslationFile(locale);
    const translation = translationsFile[key];

    return translation !== undefined ? translation : key;
}

const getTranslationFile = (locale: Locale) => {
    switch(locale) {
        case 'es':
            return esTranslations;
        default:
            return enTranslations;
    }
}