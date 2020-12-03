import { AbstractNewsScraperFactory } from "../../news-scraper/abstracts/abstract-news-scraper-factory.js"
import { DOMParser } from '../../dom-parser/dom-parser.js'
import { NewsScraper } from "../../news-scraper/classes/news-scraper.js"
import { GetPrincipalNewsQuery } from "./queries/get-principal-news-query.js"
import { GetSecondaryNewsQuery } from "./queries/get-secondary-news-query.js"
import { GetRelatedNewsQuery } from "./queries/get-related-news-query.js"


export class GloboNewsScraperFactory extends AbstractNewsScraperFactory {
    static async create() {
        const url = "https://www.globo.com/"
        const domParser = await (new DOMParser(url)).parsePage()

        const newsScraper = new NewsScraper(domParser)
        newsScraper.addQueries([
            GetPrincipalNewsQuery,
            GetSecondaryNewsQuery,
            GetRelatedNewsQuery,
        ])
        return newsScraper
    }
}