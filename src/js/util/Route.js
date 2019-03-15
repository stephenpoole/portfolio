export class Route {
    static matches(location, path) {
        return location.pathname === path;
    }
}
