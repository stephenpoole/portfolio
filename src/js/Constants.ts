import { AppData, IRouteItem, Route } from './util/index';

interface IRoute {
    [key: string]: string;
}

const arr = AppData.routes.map(({ name, path }: IRouteItem) => [name, Route.fullpath(path)]);
export const Routes: IRoute = Object.fromEntries(arr);
