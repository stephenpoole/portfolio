import React from 'react';
import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    float: left;
    height: 100%;
    width: 100px;

    ${({ theme }) => theme.media.phone} {
        width: 70px;
    }
`;

interface Props {
    children?: JSX.Element | JSX.Element;
    className?: string;
}

export const Sidebar: React.FC<Props> = ({ children, className }) => (
    <SidebarWrapper className={className}>{children}</SidebarWrapper>
);
