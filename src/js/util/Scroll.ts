const bodyRef = document.getElementsByTagName('body')[0];

export class Scroll {
    public static getProgress() {
        const scrollTop: number = window.pageYOffset;
        const bodyHeight: number = bodyRef.offsetHeight;
        const windowHeight: number = window.innerHeight;
        const offset: number = bodyHeight - windowHeight;
        return scrollTop / (offset || 1);
    }
}
