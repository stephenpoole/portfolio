import React from 'react';

const classnames = require('classnames');

export const Background = ({ animate = false }) => {
    const className = classnames([
        'background',
        {
            animate
        }
    ]);
    return <div className={className} />;
};
