// GA Enheanced Commerce Models: (more info)
// https://developers.google.com/analytics/devguides/collection/gtagjs/enhanced-ecommerce

export class PageViewEvent {
    constructor(
        readonly eventName: string,
        readonly analyticsName: string,
        readonly gtmId: string,
        readonly userAgent: string,
        readonly userId: string,
        readonly locale: string,
        readonly region: string) {
    }
}

export class LinkClickEvent {
    constructor(readonly eventName: string,
        readonly url: string,
        readonly source: string) {
    }
}
