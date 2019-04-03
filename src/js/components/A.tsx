import React, { ReactNode } from 'react';

interface Props {
    rel?: string;
    href?: string;
    children?: JSX.Element | JSX.Element | string | ReactNode | ReactNode[];
}

export const A: React.FC<Props> = ({ rel = '', href = '', children }) => (
    <a href={href} rel={`${rel} nofollow noreferer`}>
        {children}
    </a>
);
