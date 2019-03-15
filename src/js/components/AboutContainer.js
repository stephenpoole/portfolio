import React from 'react';
import { withRouter } from 'react-router';
import Loadable from 'react-loadable';
import { FadeTransition, SlideTransition } from './Transitions';
import { Routes } from '../Constants';
import { AppContext } from '../App';
import * as Util from '../util';

export const LoadableAboutComponent = Loadable({
    loader: () => import('./About'),
    loading: () => null,
    render(loaded, props) {
        const Component = loaded.About;
        const { setSlideLoaded } = props.context;
        setSlideLoaded(true);
        return <Component {...props} />;
    }
});

export const AboutContainer = withRouter(({ location }) => {
    const isMatched = Util.Route.matches(location, Routes.About);

    return (
        <AppContext.Consumer>
            {context => (
                <SlideTransition in={context.loaded && isMatched} duration={500}>
                    <FadeTransition in={context.loaded && isMatched} duration={600}>
                        <LoadableAboutComponent context={context} />
                    </FadeTransition>
                </SlideTransition>
            )}
        </AppContext.Consumer>
    );
});
