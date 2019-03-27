import * as color from 'color';

import { Random } from './index';

interface IHsl {
    color: number[];
}

export class Color {
    public static generate(base = '#131313'): string {
        const result: IHsl = color(base).hsl();
        const [h, s, l] = result.color;
        return color(`hsl(${Random.between(0, 360)}, ${s}%, ${l}%)`).hex();
    }
}
