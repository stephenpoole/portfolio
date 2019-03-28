export class Random {
    public static between(min: number, max: number): number {
        return Math.floor(Math.random() * max) + min;
    }
}
