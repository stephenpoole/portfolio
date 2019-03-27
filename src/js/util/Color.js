import { Random } from './';

const color = require('color');

export class Color {
    static generate(base = '#131313') {
        const result = color(base).hsl();
        const [h, s, l] = result.color;
        return color(`hsl(${Random.between(0, 360)}, ${s}%, ${l}%)`).hex();
    }
}
