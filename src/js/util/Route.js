import { Config } from './';

export class Route {
    static matches(location, path) {
        return location.pathname === path || location.pathname === this.fullpath(path);
    }

    static fullpath(path) {
        return `${Config.routePrefix}${path}`;
    }
}
