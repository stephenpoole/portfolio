import React from 'react';
import { Sidebar } from './index';

interface Props {
    children?: JSX.Element | JSX.Element;
}

export const SidebarContainer: React.FC<Props> = ({ children }) => <Sidebar>{children}</Sidebar>;
