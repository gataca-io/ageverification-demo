import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import commonEn from './locales/en.json';
import commonEs from './locales/es.json';
import commonDe from './locales/de.json';
import commonIt from './locales/it.json';
import commonPt from './locales/pt.json';
import commonFr from './locales/fr.json';

const resources = {
    es: {common: commonEs},
    en: {common: commonEn},
    fr: {common: commonFr},
    pt: {common: commonPt},
    it: {common: commonIt},
    de: {common: commonDe}
};

const options = {
    order: [
        //'querystring',
        //'cookie',
        'localStorage',
        //'sessionStorage',
        'navigator'
        //'htmlTag',
        //'path',
        //'subdomain',
    ],
    lookupQuerystring: 'lng'
};

const supportedLngs = ['es', 'en', 'pt', 'fr', 'de', 'it'];

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // lng: 'en' // <--- turn off for detection to work
        detection: options,
        resources,
        ns: ['common'],
        defaultNS: 'common',
        fallbackLng: 'en',
        supportedLngs: supportedLngs,
        interpolation: {
            escapeValue: false
        },
        debug: false
    });

// Check the localstorage saved language
const storedLang = localStorage.getItem('i18nextLng');
const browserLang = navigator.language.slice(0, 2);

const initialLang = storedLang && supportedLngs?.includes(storedLang) ? storedLang : browserLang && supportedLngs?.includes(browserLang) ? browserLang : 'en';

export default i18n;
export {initialLang, storedLang, supportedLngs};
