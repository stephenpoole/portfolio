import { Config } from '.';

export class Logger {
    static log(...params) {
        if (Config.debug) {
            console.log(...params);
        }
    }

    static info(...params) {
        if (Config.debug) {
            console.info(...params);
        }
    }

    static dir(...params) {
        if (Config.debug) {
            console.dir(...params);
        }
    }

    static error(...params) {
        console.error(...params);
    }

    static warn(...params) {
        console.warn(...params);
    }
}
