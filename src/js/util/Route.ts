import { Config } from './index';

interface Location {
    pathname: string;
}

export class Route {
    public static matches(location: Location, path: string): boolean {
        return location.pathname === path || location.pathname === this.fullpath(path);
    }

    public static fullpath(path: string): string {
        return `${Config.routePrefix}${path}`;
    }
}
