import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { AppData } from './util';
import { theme, GlobalStyle } from './styles';
import { Routes } from './Constants';
import {
    ContactContainer,
    WorkContainer,
    AboutContainer,
    SidebarContainer,
    ContentContainer,
    Menu
} from './components';

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const App = () => (
    <ThemeProvider theme={theme}>
        <AppWrapper>
            <Normalize />
            <GlobalStyle />
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
        </AppWrapper>
    </ThemeProvider>
);
