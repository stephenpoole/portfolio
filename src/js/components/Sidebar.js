import React from 'react';
import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    float: left;
    height: 100%;
    width: 100px;
`;

export const Sidebar = ({ children, className }) => (
    <SidebarWrapper className={className}>{children}</SidebarWrapper>
);
