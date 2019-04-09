import * as config from '../../../config.json';
import * as pkg from '../../../package.json';

import { Env, Environments } from './Env';

type IConfigFile = { [key in Environments]: IConfigData };

interface IPackageData {
    name: string;
}

interface IConfigData {
    routePrefix: string;
    imagePrefix: string;
    api: string;
    emailBodyLimit: number;
    emailLimit: number;
}

class ConfigClass implements IConfigData, IPackageData {
    public routePrefix: string;
    public imagePrefix: string;
    public api: string;
    public emailBodyLimit: number;
    public emailLimit: number;
    public name: string;
    public debug: boolean;

    public constructor() {
        this.debug = Env.isDev;
        Object.assign(this, this.debug ? config.development : config.production);
        this.name = pkg.name;
    }
}

export const Config = new ConfigClass();
