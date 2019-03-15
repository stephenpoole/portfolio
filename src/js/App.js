import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import { useAsyncEffect } from './hooks';
import { Routes } from './Constants';
import { HomeContainer, WorkContainer, AboutContainer, Background } from './components';
import { DOM } from './DOM';

export const AppContext = createContext({
    loaded: false,
    slideLoaded: false
});

export const App = () => {
    const [loaded, setLoaded] = useState(false);
    const [slideLoaded, setSlideLoaded] = useState(false);

    useAsyncEffect(
        async () => {
            try {
                const background = DOM.get('.background');
                await DOM.onAnimationFinished(background);
                DOM.removeClass(background, 'animate');
                setLoaded(true);
                background.remove();
            } catch (error) {
                console.error(error);
            }
        },
        () => {},
        []
    );

    const appContext = { loaded, setSlideLoaded };

    return (
        <div className="app-inner">
            <AppContext.Provider value={appContext}>
                <div className="route-container">
                    <Router>
                        <Switch>
                            <Route path={Routes.Work} component={WorkContainer} />
                            <Route path={Routes.About} component={AboutContainer} />
                            <Route exact path={Routes.Home} component={HomeContainer} />
                            <Redirect to={Routes.Home} />
                        </Switch>
                    </Router>
                </div>
                {loaded && <Background animate={!slideLoaded} />}
            </AppContext.Provider>
        </div>
    );
};
