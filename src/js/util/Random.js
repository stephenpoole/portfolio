export class Random {
    static between(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
}
