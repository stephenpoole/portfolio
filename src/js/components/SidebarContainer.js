import React from 'react';
import { AppData } from '../util';
import { Sidebar, Menu } from './';

export const SidebarContainer = () => (
    <Sidebar>
        <Menu social={AppData.social} routes={AppData.routes} />
    </Sidebar>
);
