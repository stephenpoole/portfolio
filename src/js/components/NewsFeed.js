import React from 'react';
import { useTranslation } from 'react-i18next';

// enable explicit oauth in client
// https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token

export const NewsFeed = () => {
    const { t } = useTranslation();
    return (
        <div className="news-feed">
            <p>
                -&nbsp;
                <em>{t('Instagram')}</em>
                &nbsp;-
            </p>
            <h3>{t('Newsfeed')}</h3>
            <div id="instafeed" />
        </div>
    );
};
