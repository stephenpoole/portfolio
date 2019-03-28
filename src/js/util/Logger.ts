import { Config, Env } from './index';

export class Logger {
    public static isDebug: boolean = Env.isDev;

    public static log<T>(...args: T[]): boolean {
        /* istanbul ignore if */
        if (Logger.isDebug) {
            window.console.log(...args);
            return true;
        }
        return false;
    }

    public static warn<T>(...args: T[]): boolean {
        /* istanbul ignore if */
        if (Logger.isDebug) {
            window.console.warn(...args);
            return true;
        }
        return false;
    }

    public static error<T>(...args: T[]): boolean {
        /* istanbul ignore if */
        if (Logger.isDebug) {
            window.console.error(...args);
            return true;
        }
        return false;
    }

    public static throw(...args: (string | undefined)[]): boolean {
        /* istanbul ignore if */
        if (Logger.isDebug) {
            throw new Error(...args);
        }
        return false;
    }
}
