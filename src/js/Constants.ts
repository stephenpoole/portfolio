import { AppData, IRouteItem, Route } from './util/index';

interface IRoute {
    [key: string]: string;
}

export const Routes: IRoute = AppData.routes.reduce(
    (previous: IRoute, { name, path }: IRouteItem) => {
        previous[name] = Route.fullpath(path);
        return previous;
    },
    {}
);
