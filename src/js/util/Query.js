const qs = require('qs');

export class Query {
    static get(key) {
        const query = qs.parse(window.location.search.replace('?', ''));
        if (typeof key !== 'undefined') {
            if (key in query) {
                return query[key];
            }
            return '';
        }
        return query;
    }
}
