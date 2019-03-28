import * as Util from '../../src/js/util/index';
import { expect } from 'chai';
import 'mocha';

describe('Random', () => {
    describe('between()', () => {
        it('should return value between min and max exclusive', () => {
            const values: Number[] = [];
            values.fill(0, 1000, Util.Random.between(1, 2));
            const result: boolean = values.every(value => value >= 1 && value < 2);
            expect(result).to.equal(true);
        });
    });
});
