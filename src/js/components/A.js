import React from 'react';
import { Config } from '../util';

export const A = ({ rel, children, ...props }) => (
    <a {...props} rel={`${rel} nofollow noreferer`}>
        {children}
    </a>
);
