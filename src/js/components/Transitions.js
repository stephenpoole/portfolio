import React from 'react';
import { Transition } from 'react-transition-group';

export const SlideTransition = ({ duration, in: inProp, children }) => {
    const defaultStyles = {
        position: 'absolute',
        transition: `transform ${duration}ms ease-in-out`
    };
    const transitionStyles = {
        entering: { transform: 'translateX(100%)' },
        entered: { transform: 'translateX(0%)' },
        exiting: { transform: 'translateX(0%)' },
        exited: { transform: 'translateX(-100%)' }
    };

    return (
        <Transition in={inProp} timeout={duration}>
            {state => (
                <div
                    style={{
                        ...defaultStyles,
                        ...transitionStyles[state]
                    }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
};

export const FadeTransition = ({ duration, in: inProp, children }) => {
    const defaultStyles = {
        opacity: 0,
        transition: `opacity ${duration}ms linear`
    };
    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 0 }
    };

    return (
        <Transition in={inProp} timeout={duration}>
            {state => (
                <div
                    style={{
                        ...defaultStyles,
                        ...transitionStyles[state]
                    }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
};
