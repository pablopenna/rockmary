import { Locale } from ".";

const enTranslations = require('./translations/en.json');
const esTranslations = require('./translations/es.json');

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