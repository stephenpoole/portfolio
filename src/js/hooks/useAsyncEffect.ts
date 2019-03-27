import { useEffect } from 'react';

export const useAsyncEffect = (
    effect: React.EffectCallback,
    destroy: Function,
    deps: ReadonlyArray<any> | undefined
) => {
    useEffect(() => {
        let result: unknown;
        effect().then((value: unknown) => (result = value));

        return () => destroy(result);
    }, deps);
};
