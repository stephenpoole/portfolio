export class StringClass {
    static random(length = 1) {
        return Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, length + 1);
    }
}
