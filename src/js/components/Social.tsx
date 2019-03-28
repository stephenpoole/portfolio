import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { A } from './index';
import { ISocialItem } from '../util';

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

interface Props {
    items: ISocialItem[];
}

export const Social: React.FC<Props> = ({ items }) => (
    <SocialWrapper>
        {Object.values(items).map(({ Component, link, name }) => {
            const Svg = styled(Component)`
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
