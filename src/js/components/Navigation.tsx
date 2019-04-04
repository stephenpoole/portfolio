import React from 'react';
import styled from 'styled-components';
import { Location, IRouteItem } from '../util/index';
import { ScrollTracker } from './ScrollTracker';
import { HashLink } from './HashLink';

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

const StyledLink = styled(HashLink)`
    padding: 30px 0;
    width: inherit;
    display: table;
    text-transform: capitalize;
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

interface Props {
    items: IRouteItem;
}

export const Navigation: React.FC<Props> = ({ items }) => {
    const itemArray = Object.values(items);

    return (
        <NavigationWrapper>
            {itemArray.map(name => {
                const isSelected = Location.matches(name);

                return (
                    <NavigationItem key={name} selected={isSelected}>
                        <StyledLink to={name}>
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
};
