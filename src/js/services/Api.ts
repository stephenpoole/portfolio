import 'whatwg-fetch';
import { Config } from '../util/index';

interface EmailSendParams {
    sender: string;
    body: string;
}

type ApiParams = EmailSendParams;

export class Api {
    public static sendEmail(sender: string, body: string): Promise<Response> {
        const params: EmailSendParams = { sender, body };
        return this.post('/email/send', params);
    }

    public static health(): Promise<Response> {
        return this.get('/health');
    }

    protected static get(path: string): Promise<Response> {
        return fetch(`${Config.api}${path}`, {
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                if (!('success' in json) || !json.success) {
                    throw new Error('message' in json ? json.message : json);
                }
                return json;
            });
    }

    protected static post(path: string, params: ApiParams): Promise<Response> {
        return fetch(`${Config.api}${path}`, {
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                if (!('success' in json) || !json.success) {
                    throw new Error('message' in json ? json.message : json);
                }
                return json;
            });
    }
}
