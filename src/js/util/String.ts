export class StringClass {
    public static random(length = 1): string {
        return Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, length + 1);
    }
}
