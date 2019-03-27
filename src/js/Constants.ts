import { AppData, IRouteItem } from './util/AppData';

interface IRoute {
    [key: string]: string;
}

const arr = Util.AppData.routes.map(({ name, path }: IRouteItem) => [
    name,
    Util.Route.fullpath(path)
]);
export const Routes: IRoute = Util.Object.fromEntries(arr);
