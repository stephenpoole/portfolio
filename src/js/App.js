import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { AppData } from './util';
import { Routes } from './Constants';
import {
    ContactContainer,
    WorkContainer,
    AboutContainer,
    SidebarContainer,
    ContentContainer,
    Menu
} from './components';

export const App = () => {
    return (
        <Router>
            <>
                <SidebarContainer>
                    <Menu social={AppData.social} routes={AppData.routes} logo={AppData.logo} />
                </SidebarContainer>
                <ContentContainer>
                    <Switch>
                        <Route path={Routes.Work} component={WorkContainer} />
                        <Route path={Routes.Contact} component={ContactContainer} />
                        <Route path={Routes.About} component={AboutContainer} />
                        <Redirect to={Routes.About} />
                    </Switch>
                </ContentContainer>
            </>
        </Router>
    );
};
