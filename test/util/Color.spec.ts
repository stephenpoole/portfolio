import 'mocha';
import * as convert from 'color-convert';
import { expect } from 'chai';
import * as Util from '../../src/js/util/index';
import { Hex } from '../../src/js/Hex';

describe('Color', () => {
    describe('luminance()', () => {
        it('should return a numeric representation of luminance', () => {
            const result: number = Util.Color.luminance(0, 0, 0);
            expect(result).to.equal(0);

            const result1: number = Util.Color.luminance(255, 255, 255);
            expect(Number(result1.toFixed(2))).to.equal(1);

            const result2: number = Util.Color.luminance(120, 120, 120);
            expect(Number(result2.toFixed(2))).to.equal(0.19);
        });
    });

    describe('contrast()', () => {
        it('should return a numeric representation of contrast', () => {
            const result: number = Util.Color.contrast(0, 0);
            expect(result).to.equal(1);
        });
    });

    describe('isReadable()', () => {
        it('should return true given an readable combination', () => {
            const result: boolean = Util.Color.isReadable(new Hex('FFF'), new Hex('000'));
            expect(result).to.equal(true);
        });

        it('should return false given an unreadable combination', () => {
            const result: boolean = Util.Color.isReadable(new Hex('FFF'), new Hex('787878'));
            expect(result).to.equal(false);
        });
    });

    describe('randomizeHue()', () => {
        it('should return a color with the same saturation and lightness as the supplied base', () => {
            const base: Hex = new Hex('0F0');
            const generated: Hex = Util.Color.randomizeHue(base);
            const baseHsl = convert.hex.hsl(base.get());
            const generatedHsl = convert.hex.hsl(generated.get());
            expect(baseHsl[1]).to.equal(generatedHsl[1]);
            expect(baseHsl[2]).to.equal(generatedHsl[2]);
        });

        it('should return a readable color alongside comparer', () => {
            const comparer: Hex = new Hex('000');
            const generated: Hex = Util.Color.randomizeHue(new Hex('FFF'), comparer);
            const result = Util.Color.isReadable(comparer, generated);
            expect(result).to.equal(true);
        });
    });
});
