export class Observer {
    constructor() {
        this.subjects = new Map();
    }

    on(event, fn) {
        const { subjects } = this;
        if (typeof event === 'undefined' || typeof fn !== 'function') {
            return;
        }
        if (!subjects.has(event)) {
            subjects.set(event, []);
        }
        const callers = subjects.get(event);
        callers.push(fn);
    }

    emit(event, ...params) {
        const { subjects } = this;
        if (subjects.has(event)) {
            for (let subject of subjects.get(event)) {
                subject.apply(this, params);
            }
        }
    }

    off(event, fn) {
        const { subjects } = this;
        if (!subjects.has(event)) {
            return;
        }
        if (typeof fn === 'function') {
            const callers = subjects.get(event);
            for (let [index, subject] of callers.entries()) {
                if (subject === fn) {
                    callers.splice(0, index);
                }
            }
        } else {
            subjects.delete(event);
        }
    }
}
