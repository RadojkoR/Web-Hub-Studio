import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importuj prevode direktno
import enTranslation from './locales/en/translation.json';
import srTranslation from './locales/sr/translation.json';
import enFooter from "./locales/en/translationFooter.json";
import srFooter from "./locales/sr/translationFooter.json";
import enHeader from "./locales/en/translationHeader.json";
import srHeader from "./locales/sr/translationHeader.json";
import enHeroHome from "./locales/en/translationHeroHome.json";
import srHeroHome from "./locales/sr/translationHeroHome.json";
import enHome from "./locales/en/translationHome.json";
import srHome from "./locales/sr/translationHome.json";


i18n
  .use(initReactI18next).init({
    debug: true,
    resources: {
      en: {
        translation: enTranslation,
        footer: enFooter,
        header: enHeader,
        heroHome: enHeroHome,
        home: enHome
      },
      sr: {
        translation: srTranslation,
        footer: srFooter,
        header: srHeader,
        heroHome: srHeroHome,
        home: srHome
      },
    },
    fallbackLng: 'en', // Podrazumevani jezik
    supportedLngs: ['en', 'sr'],
    interpolation: {
      escapeValue: false, // React već "escapuje" HTML
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator'], // Redosled detekcije jezika
      caches: ['localStorage', 'cookie'], // Gde da se čuva jezik
    },
  });

export default i18n;
