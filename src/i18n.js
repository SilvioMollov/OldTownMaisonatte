import i18n from "i18next";
import detector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";
import bg from "./bg.json";
import en from "./en.json";
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: en,
  bg: bg,
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
