import React from 'react';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
    float: left;
    height: 100%;
    position: relative;
    width: calc(100% - 100px);
`;

export const Content = ({ children, className }) => (
    <ContentWrapper className={className}>{children}</ContentWrapper>
);
