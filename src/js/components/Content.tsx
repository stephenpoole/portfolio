import React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface Props {
    className?: string;
    children?: JSX.Element | JSX.Element;
}

export const ContentWrapper = styled.div`
    position: relative;
    width: calc(100% - 100px);
    margin-left: 100px;

    ${({ theme }) => theme.media.phone} {
        width: calc(100% - 70px);
        margin-left: 70px;
    }
`;

export const Content: React.FC<Props> = ({ children, className }) => (
    <ContentWrapper className={className}>{children}</ContentWrapper>
);
