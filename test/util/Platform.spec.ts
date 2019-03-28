import 'mocha';
import { expect } from 'chai';
import * as Util from '../../src/js/util/index';

describe('Platform', () => {
    describe('mobile()', () => {
        it('should return false if platform is not mobile', () => {
            const result: boolean = Util.Platform.mobile();
            expect(result).to.equal(false);
        });
    });

    describe('desktop()', () => {
        it('should return true if platform is desktop', () => {
            const result: boolean = Util.Platform.desktop();
            expect(result).to.equal(true);
        });
    });

    describe('is()', () => {
        it('should return true if platform matches', () => {
            expect(Util.Platform.is(Util.Platforms.Desktop)).to.equal(true);
        });

        it('should return false if platform does not match', () => {
            expect(Util.Platform.is(Util.Platforms.Mobile)).to.equal(false);
        });
    });

    describe('get()', () => {
        it('should return the current platform', () => {
            expect(Util.Platform.get()).to.equal(Util.Platforms.Desktop);
        });
    });
});
