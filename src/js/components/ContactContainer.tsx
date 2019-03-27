import React from 'react';
import Loadable from 'react-loadable';

export const LoadableContactComponent = Loadable({
    loader: () => import('./Contact'),
    loading: () => null,
    render: (loaded, props) => {
        const Component = loaded.Contact;
        return <Component {...props} />;
    }
});

export const ContactContainer = () => {
    return <LoadableContactComponent />;
};
