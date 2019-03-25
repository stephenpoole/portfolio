import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Routes } from './Constants';
import { ContactContainer, WorkContainer, AboutContainer, SidebarContainer } from './components';

export const App = () => {
    return (
        <Router>
            <>
                <SidebarContainer />
                <div className="content">
                    <Switch>
                        <Route path={Routes.Work} component={WorkContainer} />
                        <Route exact path={Routes.Contact} component={ContactContainer} />
                        <Route path={Routes.About} component={AboutContainer} />
                        <Redirect to={Routes.About} />
                    </Switch>
                </div>
            </>
        </Router>
    );
};
