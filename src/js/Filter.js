import { Util } from './util';
import React from 'react';

export class Filter {

    // Filter the supplied haystack list by prop
    // @param {array} haystack Array of things
    // @param {number} needle the prop value to filter by
    // @return {array} Array of filtered things
    static byProp(haystack = [], needle, prop) {
        let arr = Util.Array.deepCopy(haystack);
        if (typeof needle === 'undefined' || !haystack.length) {
            return arr;
        }

        return arr.filter(item => prop in item && item[prop] === needle);
    }

    static byBool(haystack = [], prop, bool = true) {
        return this.byProp(haystack, bool, prop);
    }
}
