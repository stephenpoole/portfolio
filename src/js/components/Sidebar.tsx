import React from 'react';
import styled, { StyledComponent } from 'styled-components';

export const SidebarWrapper = styled.div`
    float: left;
    height: 100%;
    width: 100px;
`;

interface Props {
    children?: JSX.Element | JSX.Element;
    className?: string;
}

export const Sidebar: React.FC<Props> = ({ children, className }) => (
    <SidebarWrapper className={className}>{children}</SidebarWrapper>
);
