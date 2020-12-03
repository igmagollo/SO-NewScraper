import { AbstractQuery } from '../abstracts/abstract-query.js'
import { DOMParser } from '../../dom-parser/dom-parser.js'

export class NewsScraper {

    /**
     * @param {DOMParser} domParser 
     */
    constructor(domParser) {
        this.domParser = domParser
        this.queries = []
    }

    /**
     * @param {AbstractQuery[]} queries 
     */
    addQueries(queries) {
        this.queries = this.queries.concat(queries)
    }

    scrape() {
        return this.queries
            .map(query => this.domParser.runQuery(query))
            .reduce((a,b) => a.concat(b), [])
    }
}
