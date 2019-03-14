class RandomUtil {
    static coinflip() {
        return Math.floor(Math.random() * 2);
    }

    static between(min, max, exclude = []) {
        const value = Math.floor(Math.random() * (max - min + 1)) + min;
        if (exclude.includes(value)) {
            return this.between(min, max, exclude);
        }
        return value;
    }
}

class ArrayUtil {
    static random(arr, exclude = []) {
        if (arr.length === 0 || exclude.length >= arr.length) {
            return -1;
        }

        const index = RandomUtil.between(0, arr.length - 1);
        if (exclude.includes(index)) {
            return this.random(arr, exclude);
        }
        return index;
    }
}

class MathUtil {
    static clamp(value, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
        if (value < min) {
            return min;
        } else if (value > max) {
            return max;
        }
        return value;
    }
}

export const Util = {
    Array: ArrayUtil,
    Random: RandomUtil,
    Math: MathUtil
};
