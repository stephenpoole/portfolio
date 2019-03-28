import * as convert from 'color-convert';
import { RGB } from '../RGB';
import { Random } from './index';

export class Color {
    public static randomizeHue(base: RGB, comparer?: RGB, retries: number = 1): RGB {
        const [h, s, l] = convert.hex.hsl(base.get());
        const rand: number = Random.between(0, 360);
        const generated = new RGB(convert.hsl.hex([rand, s, l]));

        if (typeof comparer !== 'undefined' && retries < 200) {
            if (!Color.isReadable(comparer, generated)) {
                retries += 1;
                return Color.randomizeHue(base, comparer, retries);
            }
        }

        return generated;
    }

    public static isReadable(fg: RGB, bg: RGB): boolean {
        const fHex = convert.hex.rgb(fg.get());
        const fLuminance = Color.luminance(fHex[0], fHex[1], fHex[2]);

        const bHex = convert.hex.rgb(bg.get());
        const bLuminance = Color.luminance(bHex[0], bHex[1], bHex[2]);

        let bright;
        let dark;

        if (fLuminance > bLuminance) {
            bright = fLuminance;
            dark = bLuminance;
        } else {
            bright = bLuminance;
            dark = fLuminance;
        }

        const contrast = Color.contrast(bright, dark);
        return contrast < 4.5;
    }

    public static luminance(r: number, g: number, b: number): number {
        const r1 = (r / 255) ** 2.2;
        const g1 = (g / 255) ** 2.2;
        const b1 = (b / 255) ** 2.2;
        return r1 * 0.2126 + g1 * 0.7151 + b1 * 0.0721;
    }

    public static contrast(bright: number, dark: number): number {
        return (bright + 0.05) / (dark + 0.05);
    }
}
