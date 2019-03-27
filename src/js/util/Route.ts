import { Config } from './index';

export class Route {
    public static matches(location: Location, path: string) {
        return location.pathname === path || location.pathname === this.fullpath(path);
    }

    public static fullpath(path: string): string {
        return `${Config.routePrefix}${path}`;
    }
}
