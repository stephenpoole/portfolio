import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled, { StyledComponent } from 'styled-components';
import { Config, Route, IRouteItem } from '../util/index';

const NavigationWrapper = styled.ul`
    position: relative;
`;

const NavigationItem = styled.li`
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: ${({ theme, selected }) => {
        return selected
            ? `${theme.misc.lineWidth}px solid ${theme.color.text}`
            : `${theme.misc.lineWidth}px solid ${theme.color.background}`;
    }}
    border-left: ${({ theme }) => `${theme.misc.lineWidth}px solid ${theme.color.background}`};
`;

const StyledLink = styled(Link)`
    padding: 30px 0;
    width: inherit;
    display: table;
`;

const StyledSpan = styled.span`
    margin: 0 auto;
    display: table-cell;
    vertical-align: middle;
`;

interface Props {
    items: IRouteItem[];
    location: string;
}

export const Navigation: React.FC<Props> = withRouter(({ items, location }) => (
    <NavigationWrapper>
        {Object.values(items).map(({ path, name }) => {
            const isSelected = Route.matches(location, path);

            return (
                <NavigationItem key={name} selected={isSelected}>
                    <StyledLink to={Route.fullpath(path)}>
                        <StyledSpan>
                            <strong>{name}</strong>
                        </StyledSpan>
                    </StyledLink>
                </NavigationItem>
            );
        })}
    </NavigationWrapper>
));
