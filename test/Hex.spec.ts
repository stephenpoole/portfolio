import { expect, assert } from 'chai';
import 'mocha';
import { Hex } from '../src/js/Hex';

describe('Hex', () => {
    it('should accept a string hex value', () => {
        const result = new Hex('FFF');
        expect(result.hex).to.equal('ffffff');
    });

    it('should be empty if given an invalid hex digit', () => {
        const result = new Hex('0G0');
        expect(result.hex).to.equal('');
    });

    it('should by empty if given an invalid hex length', () => {
        const result = new Hex('0000');
        expect(result.hex).to.equal('');
    });

    it('should accept both lowercase and uppercase digits', () => {
        const result = new Hex('FfF');
        expect(result.hex).to.equal('ffffff');
    });

    describe('r', () => {
        it('should return the first 2 digits of the hex value', () => {
            const result = new Hex('00ff11');
            expect(result.r).to.equal('00');
        });
    });

    describe('g', () => {
        it('should return the middle 2 digits of the hex value', () => {
            const result = new Hex('00ff11');
            expect(result.g).to.equal('ff');
        });
    });

    describe('b', () => {
        it('should return the last 2 digits of the hex value', () => {
            const result = new Hex('00ff11');
            expect(result.b).to.equal('11');
        });
    });

    describe('get()', () => {
        it('should return the hex value', () => {
            const result = new Hex('fff');
            expect(result.get()).to.equal('ffffff');
        });
    });

    describe('toString()', () => {
        it('should return a valid CSS hex value', () => {
            const result = new Hex('fff');
            expect(result.toString()).to.equal('#ffffff');
        });
    });

    describe('equals()', () => {
        it('should return true given a another Hex with the same hex value', () => {
            const result = new Hex('fff');
            const result1 = new Hex('fff');
            expect(result.equals(result1)).to.equal(true);
        });

        it('should return false given a another Hex with the a different hex value', () => {
            const result = new Hex('fff');
            const result1 = new Hex('000');
            expect(result.equals(result1)).to.equal(false);
        });
    });

    describe('isHex()', () => {
        it('should return true given a valid 3 digit hex value', () => {
            const result = Hex.isHex('fff');
            expect(result).to.equal(true);
        });

        it('should return false given an invalid 3 digit hex value', () => {
            const result = Hex.isHex('0g0');
            expect(result).to.equal(false);
        });

        it('should return true given a valid 6 digit hex value', () => {
            const result = Hex.isHex('ffffff');
            expect(result).to.equal(true);
        });

        it('should return false given an invalid 6 digit hex value', () => {
            const result = Hex.isHex('0g0g0g');
            expect(result).to.equal(false);
        });

        it('should return false given a value with invalid length', () => {
            const result = Hex.isHex('ffff');
            expect(result).to.equal(false);
        });

        it('should accept both lowercase and uppercase digits', () => {
            const result = Hex.isHex('FfF');
            expect(result).to.equal(true);
        });
    });
});
