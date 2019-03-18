import React from 'react';

const classnames = require('classnames');

export const WorkNavigator = ({ dispatch, index = 0, totalItems = 4, countdown = false }) => {
    const className = classnames([
        'work-navigator',
        {
            countdown: 'work-navigator--counting'
        }
    ]);

    const items = Array(totalItems)
        .fill()
        .map((item, index1) => {
            const className1 = classnames([
                'navigator__item',
                { 'navigator__item--active': index === index1 }
            ]);

            return (
                <div
                    className={className1}
                    key={index1}
                    onClick={() => dispatch({ type: 'setIndex', index: index1, wasUser: true })}
                >
                    <div className="work-navigator__item-indicator" />
                    <div className="work-navigator__item-background" />
                </div>
            );
        });

    return <div className={className}>{items}</div>;
};
