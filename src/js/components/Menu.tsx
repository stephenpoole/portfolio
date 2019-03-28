import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { Image, A, Logo, Navigation, Social } from './index';
import { ISocialItem, IRouteItem, IInfo } from '../util';

const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
`;

interface Props {
    social: ISocialItem[];
    routes: IRouteItem[];
    info: IInfo;
}

export const Menu: React.FC<Props> = ({ social, routes, info }) => (
    <MenuWrapper>
        <Logo {...info} />
        <Navigation items={routes} />
        <Social items={social} />
    </MenuWrapper>
);
