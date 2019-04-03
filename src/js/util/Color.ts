import * as convert from 'color-convert';
import { Hex } from '../Hex';
import { Random } from './Random';

export class Color {
    public static generatePair(foreground: Hex, background: Hex): Hex[] {
        const color: Hex = Color.randomizeHue(foreground);
        return [color, Color.randomizeHue(background, color)];
    }

    public static randomizeHue(base: Hex, comparer?: Hex, retries: number = 1): Hex {
        const [h, s, l] = convert.hex.hsl(base.get());
        const rand: number = Random.between(0, 360);
        const generated = new Hex(convert.hsl.hex([rand, s, l]));

        if (typeof comparer !== 'undefined' && retries < 200) {
            if (!Color.isReadable(comparer, generated)) {
                retries += 1;
                return Color.randomizeHue(base, comparer, retries);
            }
        }

        return generated;
    }

    public static isReadable(fg: Hex, bg: Hex): boolean {
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
        return contrast > 4.5; // 4.5:1 is the standard ratio for text according to WCAG AA
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

export class ColorTweener {
    protected colors: number[][];

    public constructor(colors: Hex[] = []) {
        this.colors = colors.map(color => convert.hex.hsl(color.toString()));
    }

    public getColor(progress: number): string {
        const index = this.getIndex(progress);
        const color = this.colors[index];
        const color1 = this.colors[index + 1];
        const multiplier = this.getIntermediaryProgress(progress);
        const averages = [
            Math.abs(color[0] - color1[0]) * multiplier + Math.min(color[0], color1[0]),
            Math.abs(color[1] - color1[1]) * multiplier + Math.min(color[0], color1[1]),
            Math.abs(color[2] - color1[2]) * multiplier + Math.min(color[0], color1[2])
        ];
        const hsl: [number, number, number] = [
            this.rollover(averages[0], 360),
            this.rollover(averages[1], 100),
            this.rollover(averages[2], 100)
        ];
        return `#${convert.hsl.hex(hsl)}`;
    }

    protected getIndex(progress: number): number {
        let index = Math.floor(progress * this.colors.length) - 1;
        if (index < 0) {
            index = 0;
        }
        return index;
    }

    protected getIntermediaryProgress(progress: number): number {
        const base = progress * this.colors.length;
        return base - Math.floor(base);
    }

    protected rollover(base: number, max: number): number {
        while (base > max) {
            base -= max;
        }
        return base;
    }
}
