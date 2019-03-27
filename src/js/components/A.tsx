import React from 'react';

interface Props {
    rel?: string;
    children?: JSX.Element | JSX.Element;
}

export const A: React.FC<Props> = ({ rel = '', children, ...props }) => (
    <a {...props} rel={`${rel} nofollow noreferer`}>
        {children}
    </a>
);
