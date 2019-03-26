import React from 'react';

export const A = ({ rel = '', children, ...props }) => (
    <a {...props} rel={`${rel} nofollow noreferer`}>
        {children}
    </a>
);
