export class DOM {
    static get(selector) {
        return document.querySelector(selector);
    }

    static remove(selector) {
        const element = this.get(selector);
        if (element) {
            element.remove();
            return true;
        }
        return false;
    }

    static addClass(element, className) {
        if (!element) {
            console.warn(`${element} is undefined`);
            return false;
        }
        let classes = (element.getAttribute('class') || '').split(' ');
        if (classes.includes(className)) {
            return false;
        }
        classes.push(className);
        element.setAttribute('class', classes.join(' ').trim());
        return true;
    }

    static removeClass(element, className) {
        if (!element) {
            console.warn(`${element} is undefined`);
            return false;
        }
        let classes = (element.getAttribute('class') || '').split(' ');
        if (!classes.includes(className)) {
            return false;
        }
        for (let index = 0; index < classes.length; index++) {
            const classValue = classes[index];
            if (className === classValue) {
                classes.splice(index, 1);
                break;
            }
        }
        element.setAttribute('class', classes.join(' ').trim());
        return true;
    }

    static hasClass(element, className) {
        if (!element) {
            console.warn(`${element} is undefined`);
            return false;
        }
        const classes = element.getAttribute('class').split(' ');
        return classes.includes(className);
    }

    static onAnimationFinished(element, timeout) {
        return new Promise(resolve => {
            let rejectTimeout;

            const callback = () => {
                element.removeEventListener('animationiteration', callback);
                element.removeEventListener('webkitAnimationIteration', callback);
                clearTimeout(rejectTimeout);
                resolve();
            };

            if (typeof timeout === 'number') {
                rejectTimeout = setTimeout(() => {
                    callback();
                }, timeout);
            }

            element.addEventListener('animationiteration', callback);
            element.addEventListener('webkitAnimationIteration', callback);
        });
    }
}
