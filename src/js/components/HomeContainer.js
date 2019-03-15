import React from 'react';
import { withRouter } from 'react-router';
import Loadable from 'react-loadable';
import { FadeTransition, SlideTransition } from './Transitions';
import { Routes } from '../Constants';
import { AppContext } from '../App';
import * as Util from '../util';

export const LoadableHomeComponent = Loadable({
    loader: () => import('./Home'),
    loading: () => null,
    render(loaded, props) {
        const Component = loaded.Home;
        const { setSlideLoaded } = props.context;
        setSlideLoaded(true);
        return <Component {...props} />;
    }
});

export const HomeContainer = withRouter(({ location }) => {
    const isMatched = Util.Route.matches(location, Routes.Home);

    return (
        <AppContext.Consumer>
            {context => (
                <SlideTransition in={context.loaded && isMatched} duration={500}>
                    <FadeTransition in={context.loaded && isMatched} duration={600}>
                        <LoadableHomeComponent context={context} />
                    </FadeTransition>
                </SlideTransition>
            )}
        </AppContext.Consumer>
    );
});
