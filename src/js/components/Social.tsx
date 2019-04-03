import React, { ReactChildren, ReactPortal, ReactNode } from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
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
            `;
            const CustomLink: React.FC<{}> = ({ children }) => {
                if (name === 'email') {
                    return (
                        <Link
                            scroll={element =>
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                            to={'/#Contact'}
                        >
                            {children}
                        </Link>
                    );
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
