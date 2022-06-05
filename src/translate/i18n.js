import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { messages } from "./languages";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    debug: false,
    defaultNS: ["translations"],

    ns: ["translations"],
    resources: messages,
  });

export { i18n };
