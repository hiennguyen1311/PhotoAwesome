import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';

import * as en from './en.json';
// import * as vi from './vi.json';

i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = { en };
i18n.missingTranslation = () => { return i18n.translate('GLOBAL.MISSING_TRANSLATE') }
export const setI18nConfig = async (lang: string) => {
  let language = en;
  switch (lang) {
    case 'vi':
      language = require('./vi.json');
      i18n.translations = { vi: language };
      break;
    case 'en':
      language = en;
      i18n.translations = { en: language };
      break;
  }
  i18n.locale = lang || 'en';
};

export default i18n;
