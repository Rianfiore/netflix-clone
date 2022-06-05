import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { messages } from "./languages";

i18n.use(LanguageDetector).init({
  debug: false,
  defaultNS: ["translations"],
  ns: ["translations"],
  resources: messages,
});

i18n.translator.language = localStorage.getItem("i18nextLng").replace("-", "");

export { i18n };
