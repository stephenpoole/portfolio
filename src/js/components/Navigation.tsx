import React from 'react';
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { Route, IRouteItem } from '../util/index';
import { ScrollTracker } from './index';

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
    min-height: 64px;

    strong {
        display: block;
        text-align: center;
    }
`;

interface Params {
    location?: string | undefined;
}

interface Props extends RouteComponentProps<Params> {
    items: IRouteItem[];
}

export const Navigation = withRouter<Props>(({ items, location }) => {
    const itemArray = Object.values(items);

    return (
        <NavigationWrapper>
            {itemArray.map(({ path, name }) => {
                const isSelected = Route.matches(location, path);

                return (
                    <NavigationItem key={name} selected={isSelected}>
                        <StyledLink
                            scroll={element =>
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                            to={`/#${name}`}
                        >
                            <StyledSpan>
                                <strong>{name}</strong>
                            </StyledSpan>
                        </StyledLink>
                    </NavigationItem>
                );
            })}
            <ScrollTracker count={itemArray.length} />
        </NavigationWrapper>
    );
});
