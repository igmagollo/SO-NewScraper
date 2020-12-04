import { AbstractQuery } from '../abstracts/abstract-query.js'
import { DOMParser } from '../../dom-parser/dom-parser.js'
import { Observable } from '../../observer/observable.js'

export class NewsScraper extends Observable {

    /**
     * @param {DOMParser} domParser 
     */
    constructor(domParser) {
        super()
        this.domParser = domParser
        this.queries = []
    }

    /**
     * @param {AbstractQuery[]} queries 
     */
    addQueries(queries) {
        this.queries = this.queries.concat(queries)
    }

    run() {
        this.submitValue(
            this.queries
                .map(query => this.domParser.runQuery(query))
                .reduce((a,b) => a.concat(b), [])
        )
    }
}
