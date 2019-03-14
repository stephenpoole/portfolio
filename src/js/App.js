import React from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import {
    CarsSoldContainer,
    FeaturedCarContainer,
    NewsFeedContainer,
    CountdownContainer
} from './components';
import { Config, Query } from './util';
import { Resources } from './i18n';

const classNames = require('classnames');
const appClassName = classNames(['app-inner', `language-${Config.lang}`]);

i18next.init({
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    lng: Config.lang,
    debug: Config.debug,
    resources: Resources
});

export const App = () => (
    <I18nextProvider i18n={i18next}>
        <div className={appClassName} />
    </I18nextProvider>
);
