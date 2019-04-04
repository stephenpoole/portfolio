export class Location {
    public static matches(name: string): boolean {
        return window.location.pathname.includes(name);
    }
}
