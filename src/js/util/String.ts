export class StringClass {
    public static random(length: number = 1, prefix: string = ''): string {
        let result = prefix;
        let size = length < 1 ? 1 : length;

        result += Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '');

        if (result.length < size) {
            return StringClass.random(size, result);
        }

        return result.substr(0, size);
    }
}
