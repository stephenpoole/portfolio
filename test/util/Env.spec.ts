import 'mocha';
import { expect } from 'chai';
import * as Util from '../../src/js/util/index';

describe('Env', () => {
    describe('is()', () => {
        it('should return true if env matches', () => {
            const result: boolean = Util.Env.is(Util.Environments.Production);
            expect(result).to.equal(true);
        });

        it('should return true if env does not match', () => {
            const result: boolean = Util.Env.is(Util.Environments.Development);
            expect(result).to.equal(false);
        });
    });

    describe('isDev', () => {
        it('should return true if env is dev', () => {
            expect(Util.Env.isDev).to.equal(false);
        });
    });

    describe('isProd', () => {
        it('should return true if env is prod', () => {
            expect(Util.Env.isProd).to.equal(true);
        });
    });

    describe('get()', () => {
        it('should return the current env', () => {
            expect(Util.Env.get()).to.equal(Util.Environments.Production);
        });
    });
});
