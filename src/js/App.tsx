import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import * as Util from './util/index';
import { theme, GlobalStyle } from './styles/index';
import { Routes } from './Constants';
import { SidebarContainer, ContentContainer, Menu, Book } from './components/index';

const AppWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const App: React.FC<{}> = () => (
    <ThemeProvider theme={theme}>
        <AppWrapper>
            <Normalize />
            <GlobalStyle />
            <Router>
                <>
                    <SidebarContainer>
                        <Menu
                            social={Util.AppData.social}
                            routes={Util.AppData.routes}
                            info={Util.AppData.info}
                        />
                    </SidebarContainer>
                    <ContentContainer>
                        <Book>
                            {Util.AppData.routes.map(
                                ({ name, path, Component }: Util.IRouteItemData) => {
                                    return <Component key={path} route={{ name, path }} />;
                                }
                            )}
                            <Switch>
                                <Route path={Routes.Work} />
                                <Route path={Routes.Contact} />
                                <Route path={Routes.About} />
                                <Redirect to={Routes.About} />
                            </Switch>
                        </Book>
                    </ContentContainer>
                </>
            </Router>
        </AppWrapper>
    </ThemeProvider>
);
