import React from 'react';
import Loadable from 'react-loadable';

export const LoadableAboutComponent = Loadable({
    loader: () => import('./About'),
    loading: () => null,
    render: (loaded, props) => {
        const Component = loaded.About;
        return <Component {...props} />;
    }
});

export const AboutContainer = () => {
    return <LoadableAboutComponent />;
};
