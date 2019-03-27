import { useRef, useEffect } from 'react';

export const useInterval = (callback: Function, delay: number) => {
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
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
            return () => {};
        },
        [delay]
    );
};
