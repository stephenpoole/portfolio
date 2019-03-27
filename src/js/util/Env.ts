export enum Environments {
    Production = 'production',
    Development = 'development'
}

const env: Environments = process.env.NODE_ENV! as Environments;

export class Env {
    public static is(environment: Environments): boolean {
        return environment === this.get();
    }

    public static get isDev(): boolean {
        return this.get() === Environments.Development;
    }

    public static get isProd(): boolean {
        return this.get() === Environments.Production;
    }

    public static get(): Environments {
        return env;
    }
}
