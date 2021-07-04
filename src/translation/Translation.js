import i18n from 'i18n-js';

import id from './translations/id.json';

i18n.defaultLocale = 'id';
i18n.locale = 'id';
i18n.fallbacks = true;
i18n.translations = { id };

const Translation = (props) => {

  const { translationID } = props;

  return i18n.t(translationID)
}

export default Translation;