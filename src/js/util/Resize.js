import { Observer } from '../Observer';
import { debounce } from 'debounce';

class ResizeClass extends Observer {
    constructor() {
        super();
        window.addEventListener('resize', debounce(this.onResize.bind(this), 200), false);
    }

    register(fn) {
        this.on('resize', fn);
    }

    unregister(fn) {
        this.off('resize', fn);
    }

    onResize() {
        this.emit('resize', {
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
}

export const Resize = new ResizeClass();
