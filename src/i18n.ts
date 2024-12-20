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
import enWhyItMatters from "./locales/en/translationWhyItMatters.json";
import srWhyItMatters from "./locales/sr/translationWhyItMatters.json";
import enServices from "./locales/en/translationServices.json";
import srServices from "./locales/sr/translationServices.json";
import enProjects from "./locales/en/translationProjects.json";
import srProjects from "./locales/sr/translationProjects.json";


i18n
  .use(initReactI18next).init({
    // debug: true,
    resources: {
      en: {
        translation: enTranslation,
        footer: enFooter,
        header: enHeader,
        heroHome: enHeroHome,
        home: enHome,
        whyItMatters: enWhyItMatters,
        services: enServices,
        projects: enProjects
      },
      sr: {
        translation: srTranslation,
        footer: srFooter,
        header: srHeader,
        heroHome: srHeroHome,
        home: srHome,
        whyItMatters: srWhyItMatters,
        services: srServices,
        projects: srProjects
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'sr'],
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
