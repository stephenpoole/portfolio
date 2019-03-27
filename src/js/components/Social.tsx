import React from 'react';
import styled from 'styled-components';
import { A } from './index';

const SocialWrapper = styled.ul`
    position: absolute;
    padding: 8px 0;
    bottom: 0;
    width: inherit;
`;

const SocialItem = styled.li`
    a {
        display: block;
    }
`;

export const Social = ({ items }) => (
    <SocialWrapper>
        {Object.values(items).map(({ component, link, name }) => {
            const Svg = styled(component)`
                width: 28px;
                margin: 0 auto;
                padding: 17px 0;
                display: block;
                fill: ${({ theme }) => theme.color.text};
            `;
            return (
                <SocialItem key={name}>
                    <A href={link}>
                        <Svg />
                    </A>
                </SocialItem>
            );
        })}
    </SocialWrapper>
);
