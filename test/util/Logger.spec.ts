import 'mocha';
import { expect, assert } from 'chai';
import * as Util from '../../src/js/util/index';

describe('Logger', () => {
    describe('log()', () => {
        it('should not call console.log in production environment', () => {
            expect(Util.Logger.log()).to.equal(false);
        });
    });

    describe('warn()', () => {
        it('should not call console.warn in production environment', () => {
            expect(Util.Logger.warn()).to.equal(false);
        });
    });

    describe('error()', () => {
        it('should not call console.error in production environment', () => {
            expect(Util.Logger.error()).to.equal(false);
        });
    });

    describe('error()', () => {
        it('should not throw in production environment', () => {
            expect(Util.Logger.throw()).to.equal(false);
        });
    });
});
