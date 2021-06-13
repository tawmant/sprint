import React from 'react';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import langRu from './ru.json';
import langKg from './kg.json';
import langEn from './en.json';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const Lang = {
    'kg': {translation: langKg},
    'ru': {translation: langRu},
    'en': {translation: langEn},
};

// export const getCurrentLanguage = () => localStorage.getItem('lang') ? localStorage.getItem('lang') : 'kg';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: 'en',
    debug: true,

    resources: Lang,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
  });

// localStorage.setItem('lang', getCurrentLanguage())
export default i18n;
