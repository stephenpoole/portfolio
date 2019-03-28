import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import styled, { StyledComponent } from 'styled-components';
import { Config, Route, IRouteItem } from '../util/index';

const NavigationWrapper = styled.ul`
    position: relative;
`;

interface NavigationItemProps {
    selected: boolean;
}

const NavigationItem = styled.li<NavigationItemProps>`
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
    }};
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

interface Params {
    location?: string | undefined;
}

interface Props extends RouteComponentProps<Params> {
    items: IRouteItem[];
}

export const Navigation = withRouter<Props>(({ items, location }) => (
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
