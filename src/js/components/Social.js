import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Image, A } from './';

const SocialWrapper = styled.ul`
    position: absolute;
    bottom: 0;
    width: inherit;
`;

const SocialItem = styled.li``;

const StyledImage = styled(Image)`
    background-size: 100% 100%;
`;

export const Social = ({ items }) => (
    <SocialWrapper>
        {Object.values(items).map(({ image, link, name }) => (
            <SocialItem key={name}>
                <A href={link}>
                    <StyledImage src={image} />
                </A>
            </SocialItem>
        ))}
    </SocialWrapper>
);
