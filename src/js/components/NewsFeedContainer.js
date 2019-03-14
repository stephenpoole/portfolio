import React, { useEffect } from 'react';
import { Config } from '../util';
import { NewsFeed } from './NewsFeed';

const Instafeed = require('instafeed.js');

export const NewsFeedContainer = () => {
    useEffect(() => {
        const { userId, clientId, accessToken } = Config.instagram;
        const feed = new Instafeed({
            get: 'user',
            userId,
            clientId,
            accessToken,
            limit: 21,
            sortBy: 'most-recent',
            template: '<img src={{image}} />'
        }).run();
    }, []);

    return <NewsFeed />;
};
