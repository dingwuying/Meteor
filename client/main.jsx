import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import i18n from 'meteor/universe:i18n';
import { Router } from '../imports/ui/Router';

import en from '../messages/en.i18n.json';

Meteor.startup(() => {
  i18n.addTranslations('en', { en });
  i18n.setOptions({
    defaultLocale: 'en',
  });

  render(<Router />, document.getElementById('react-target'));
});
