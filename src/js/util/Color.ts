import { Random } from './index';

const color = require('color');

interface IHsl {
    color: number[];
}

export class ColorClass {
    public static generate(base = '#131313'): string {
        const result: IHsl[] = color(base).hsl();
        const [h, s, l] = result.color;
        return color(`hsl(${Random.between(0, 360)}, ${s}%, ${l}%)`).hex();
    }
}
