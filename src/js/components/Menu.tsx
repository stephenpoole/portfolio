import React from 'react';
import styled from 'styled-components';
import { Image, A, Logo, Navigation, Social } from './index';
import { withRouter, Link } from 'react-router-dom';

const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
`;

export const Menu = ({ social, routes, info }) => (
    <MenuWrapper>
        <Logo {...info} />
        <Navigation items={routes} />
        <Social items={social} />
    </MenuWrapper>
);
