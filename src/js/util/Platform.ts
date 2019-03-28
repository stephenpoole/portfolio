export enum Platforms {
    Desktop = 'desktop',
    Mobile = 'mobile'
}

export class Platform {
    public static mobile(): boolean {
        return this.is(Platforms.Mobile);
    }

    public static desktop(): boolean {
        return this.is(Platforms.Desktop);
    }

    public static is(platform: Platforms): boolean {
        return this.get() === platform;
    }

    public static get(): Platforms {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
        return navigator.userAgent.includes('mobi') ? Platforms.Mobile : Platforms.Desktop;
    }
}
