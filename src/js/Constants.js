import { Config } from './util';

const RouteNames = {
    Home: `/`,
    About: `/about`,
    Work: `/work`
};

export const Routes = Object.fromEntries(
    Object.entries(RouteNames).map(([key, value]) => [key, `${Config.routePrefix}${value}`])
);
