import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import { sv, en } from './localess'

const options = {
  interpolation: {
    escapeValue: true
  },
  debug: true,
  resources: {
    sv: {
      common: sv.sv
    },
    en: {
      common: en.en
    }
  },

  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  }
}

i18n
  .use(LanguageDetector)
  .init(options)

export default i18n