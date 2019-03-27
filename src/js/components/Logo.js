import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    position: relative;
    width: inherit;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoInner = styled.div`
    h1,
    p {
        white-space: nowrap;
        text-align: right;
        padding: 0 4px;
    }
`;

export const Logo = ({ name, title }) => (
    <LogoWrapper>
        <LogoInner>
            <h1>{name}</h1>
            <p>
                <strong>{title}</strong>
            </p>
        </LogoInner>
    </LogoWrapper>
);
