import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
    rel?: string;
    href?: string;
    children?: JSX.Element | JSX.Element | string | ReactNode | ReactNode[];
    underlined?: boolean;
}

const StyledA = styled.a<Props>`
    ${({ underlined, theme: { misc, color } }) =>
        underlined &&
        `
        display:block;

        &:after {
            content: ' ';
            width: 100%;
            height: ${misc.lineWidth}px;
            color:  ${color.text};
            left: 0;
            bottom: -1px;
        }
    `}
`;

export const A: React.FC<Props> = ({ rel = '', href = '', children, underlined = false }) => (
    <StyledA href={href} rel={`${rel} nofollow noreferer`} underlined={underlined}>
        {children}
    </StyledA>
);
