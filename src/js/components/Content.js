import React from 'react';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
    float: left;
    height: 100%;
    width: calc(100% - 100px);
`;

const ContentInner = styled.div`
    position: relative;
    border: ${props => props.theme.misc.lineWidth}px solid ${props => props.theme.color.text};
    margin-top: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 50px;
`;

export const Content = ({ children, className }) => (
    <ContentWrapper className={className}>
        <ContentInner>{children}</ContentInner>
    </ContentWrapper>
);
