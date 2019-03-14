const env = process.env.NODE_ENV;

export class Env {
    static is(environment) {
        return environment === this.get();
    }

    static get isDev() {
        return this.get() === 'development';
    }

    static get isProd() {
        return this.get() === 'production';
    }

    static get() {
        return env;
    }
}
