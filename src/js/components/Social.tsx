import React from 'react';
import styled from 'styled-components';
import { A, HashLink } from './index';
import { ISocialItem, AppData } from '../util';

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

interface IProps {
    items: ISocialItem[];
}

export const Social: React.FC<IProps> = ({ items }) => (
    <SocialWrapper>
        {Object.values(items).map(({ Component, link, name }) => {
            const Svg = styled(Component)`
                width: 28px;
                margin: 0 auto;
                padding: 17px 0;
                display: block;
                fill: ${({ theme }) => theme.color.text};

                ${({ theme }) => theme.media.phone} {
                    width: 20px;
                }
            `;
            const CustomLink: React.FC<{}> = ({ children }) => {
                if (name === 'email') {
                    return <HashLink to={AppData.routes.contact}>{children}</HashLink>;
                }

                return <A href={link}>{children}</A>;
            };

            return (
                <SocialItem key={name}>
                    <CustomLink>
                        <Svg />
                    </CustomLink>
                </SocialItem>
            );
        })}
    </SocialWrapper>
);
