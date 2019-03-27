import { useRef, useEffect } from 'react';

export const useTimeout = (callback: Function, delay: number) => {
    const savedCallback = useRef();

    useEffect(
        () => {
            savedCallback.current = callback;
        },
        [callback]
    );

    useEffect(
        () => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setTimeout(tick, delay);
                return () => clearTimeout(id);
            }
            return () => {};
        },
        [delay]
    );
};
