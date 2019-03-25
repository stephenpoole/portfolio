import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    position: relative;
    width: inherit;
    writing-mode: vertical-rl;
    display: table;
    transform: rotate(180deg);
    padding: 15px 0;
`;

const LogoInner = styled.div`
    display: table-cell;
    vertical-align: middle;

    h3,
    p {
        white-space: nowrap;
        text-align: right;
        padding: 0 1px;
    }
`;

export const Logo = ({ name, title }) => (
    <LogoWrapper>
        <LogoInner>
            <h3>{name}</h3>
            <p>
                <strong>{title}</strong>
            </p>
        </LogoInner>
    </LogoWrapper>
);
