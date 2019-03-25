import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Config, Route } from '../util';

const NavigationWrapper = styled.ul`
    position: relative;
`;

const NavigationItem = styled.li`
    writing-mode: vertical-rl;
    display: table;
    transform: rotate(180deg);
    width: 100%;
`;

const StyledLink = styled(Link)`
    display: table-cell;
    vertical-align: middle;
    padding: 30px 0;
    border-right: ${({ theme, selected }) =>
        selected
            ? `${({ theme }) => theme.misc.lineWidth}px solid ${({ theme }) => theme.color.text}`
            : `2px solid ${({ theme }) => theme.color.background}`};
    border-left: 2px solid ${({ theme }) => theme.color.background};
`;

export const Navigation = withRouter(({ items, location }) => (
    <NavigationWrapper>
        {Object.values(items).map(({ path, name }) => {
            const isSelected = Route.matches(location, path);

            return (
                <NavigationItem key={name}>
                    <StyledLink to={Route.fullpath(path)} selected={isSelected}>
                        <strong>{name}</strong>
                    </StyledLink>
                </NavigationItem>
            );
        })}
    </NavigationWrapper>
));
