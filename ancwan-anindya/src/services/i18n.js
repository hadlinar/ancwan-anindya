import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: localStorage.getItem('language') || 'en',
    whitelist: ['en', 'id'],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    order: ['localStorage', 'navigator'],
    caches: 'localStorage',
    supportedLngs: ["en", "id"],
    debug: process.env.NODE_ENV === "production",
  });

export default i18next;