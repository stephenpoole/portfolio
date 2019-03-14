export class Timezone {
    static get() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
}
