export class NewsScraperFactory {
    constructor(siteMap) {
        this.siteMap = siteMap
    }

    createUsingSiteMap(key) {
        const newsScraperCreator = this.siteMap[key]
        if (!newsScraperCreator)
            throw new Error('Site not supported')
        return newsScraperCreator.create()
    }
}