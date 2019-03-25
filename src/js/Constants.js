import * as Util from './util';

const arr = Util.AppData.routes.map(({ name, path }) => [name, Util.Route.fullpath(path)]);
export const Routes = Util.Object.fromEntries(arr);
