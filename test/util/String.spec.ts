import 'mocha';
import { expect } from 'chai';
import * as Util from '../../src/js/util/index';

describe('String', () => {
    describe('random()', () => {
        it('should return a string of the given length', () => {
            const values: string[] = [];
            for (let index = 1; index < 100; index += 1) {
                values.push(Util.String.random(index));
            }
            const result: boolean = values.every((value, index) => value.length === index + 1);
            expect(result).to.equal(true);
        });

        it('should return length 1 if given a length less than 1', () => {
            const result: string = Util.String.random(-2);
            expect(result.length).to.equal(1);
        });
    });
});
