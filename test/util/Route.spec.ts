import 'mocha';
import { expect } from 'chai';
import * as Util from '../../src/js/util/index';

describe('Route', () => {
    describe('matches()', () => {
        it('should return true if location.pathname matches path', () => {
            const result: boolean = Util.Route.matches({ pathname: 'test' }, 'test');
            expect(result).to.equal(true);
        });

        it('should return false if location.pathname does not match path', () => {
            const result: boolean = Util.Route.matches({ pathname: 'test1' }, 'test');
            expect(result).to.equal(false);
        });
    });
});
