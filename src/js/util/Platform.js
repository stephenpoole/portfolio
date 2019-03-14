export class Platform {
    static mobile() {
        return this.is('mobile');
    }

    static desktop() {
        return this.is('desktop');
    }

    static is(platform) {
        return this.get() === platform;
    }

    static get() {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
        return navigator.userAgent.includes('mobi') ? 'mobile' : 'desktop';
    }
}
