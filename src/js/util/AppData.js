const data = require('../../data.json');

export class AppDataClass {
    constructor() {
        Object.assign(this, data);
    }
}

export const AppData = new DataClass();
