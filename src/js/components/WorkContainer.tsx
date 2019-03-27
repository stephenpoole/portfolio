import React from 'react';
import Loadable from 'react-loadable';

export const LoadableWorkComponent = Loadable({
    loader: () => import('./Work'),
    loading: () => null,
    render: (loaded, props) => {
        const Component = loaded.Work;
        Component.displayName = 'LoadableWorkComponent';
        return <Component {...props} />;
    }
});

export const WorkContainer = () => {
    return <LoadableWorkComponent />;
};
