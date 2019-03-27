import { Env, Environments } from './index';

const config: { [key: Environments]: IConfigData } = require('../../../config.json'),
    pkg: IPackageData = require('../../../package.json');

interface IConfigData {
    routePrefix: string;
    imagePrefix: string;
}

interface IPackageData {
    name: string;
}

class ConfigClass implements IConfigData, IPackageData {
    public debug: boolean;

    constructor() {
        this.debug = Env.isDev;
        Object.assign(this, this.debug ? config.development : config.production);
        this.name = pkg.name;
    }
}

export const Config = new ConfigClass();
