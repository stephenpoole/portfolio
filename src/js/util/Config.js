import { Env } from './';

const config = require('../../../config.json'),
    pkg = require('../../../package.json');

class ConfigClass {
    constructor() {
        this.debug = Env.isDev;
        Object.assign(this, this.debug ? config.development : config.production);
        this.name = pkg.name;
    }
}

export const Config = new ConfigClass();
