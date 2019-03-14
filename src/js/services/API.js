import 'whatwg-fetch';
import { Config, Breakpoint, Logger } from '../util';
import { Util } from '../util';

const qs = require('qs'),
    dayjs = require('dayjs');

class APIClass {
    url = Config.apiUrl;

    mock(path, data) {
        const url = this.formatUrl(path);
        return new Promise(resolve =>
            setTimeout(() => resolve(data), Util.Random.between(50, 150))
        ).then(json => this.log(json, url, '(mocked)'));
    }

    get(path, params = {}) {
        const url = this.formatUrl(path, params);
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (this.hasError(json)) {
                        throw new Error(json.Message);
                    }
                    return json;
                })
                .then(json => this.transform(json, path, params))
                .then(json => resolve(json))
                .catch(error => reject(error));
        });
    }

    post(path, params = {}, payload = {}) {
        const url = this.formatUrl(path, params);
        return fetch(url, {
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                if (this.hasError(json)) {
                    throw new Error(json.Message);
                }
                return json;
            })
            .then(json => this.log(json, url));
    }

    formatUrl(path, params = {}) {
        const filteredParams = {};
        Object.entries(params).map(([key, value]) => {
            switch (typeof value) {
                case 'string':
                    if (!value.length) {
                        return;
                    }
                    break;
                case 'number':
                    break;
                default:
                    return;
            }

            filteredParams[key] = value;
        });

        const encoded = qs.stringify({
            lang: Config.lang,
            ...filteredParams
        });
        return `${this.url}${path}?${encoded}`;
    }

    transform(json, path, params) {
        const prop = path.replace(/\//g, '');
        if (prop in Transformer) {
            return Transformer[prop].call(Transformer, json, params);
        }
        return json;
    }

    hasError(json) {
        return 'Message' in json && json.Message === 'An error has occurred.';
    }

    log(json, url, ...params) {
        Logger.log(this, url, json, ...params);
        return json;
    }
}

export const API = new APIClass();
