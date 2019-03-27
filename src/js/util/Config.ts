import * as config from '../../../config.json';
import * as pkg from '../../../package.json';

import { Env, Environments } from './index';

type IConfigFile = { [key in Environments]: IConfigData };

interface IPackageData {
    name: string;
}

interface IConfigData {
    routePrefix: string;
    imagePrefix: string;
}

class ConfigClass implements IConfigData, IPackageData {
    public routePrefix: string;
    public imagePrefix: string;
    public name: string;
    public debug: boolean;

    public constructor() {
        this.debug = Env.isDev;
        Object.assign(this, this.debug ? config.development : config.production);
        this.name = pkg.name;
    }
}

export const Config = new ConfigClass();
