import { Env, Query } from './';

const config = require('../../../config.json'),
    pkg = require('../../../package.json');
    
class ConfigClass {
    constructor() {
        this.debug = Env.isDev;
        Object.assign(this, this.debug ? config.development : config.production);
        this.name = pkg.name;
        const lang = Query.get('lang');
        this.lang = lang.length > 0 ? lang : 'en';
    }
}

export const Config = new ConfigClass();
