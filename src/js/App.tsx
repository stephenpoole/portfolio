import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import * as Util from './util/index';
import { theme, GlobalStyle } from './styles/index';
import {
    SidebarContainer,
    ContentContainer,
    Menu,
    Book,
    TweenColorsViaScroll,
    About,
    Work,
    Contact
} from './components/index';

const AppWrapper = styled.div`
    width: 100%;
    position: relative;
    color: ${({ theme }) => theme.color.text};
    background: ${({ theme }) => theme.color.background};
`;

export const App: React.FC<{}> = () => (
    <ThemeProvider theme={theme}>
        <>
            <TweenColorsViaScroll />
            <AppWrapper>
                <Normalize />
                <GlobalStyle />
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
                            <About route={Util.AppData.routes.about} />
                            <Work route={Util.AppData.routes.work} />
                            <Contact route={Util.AppData.routes.contact} />
                        </Book>
                    </ContentContainer>
                </>
            </AppWrapper>
        </>
    </ThemeProvider>
);
