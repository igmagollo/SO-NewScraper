import { AbstractQuery } from '../abstracts/abstract-query.js'
import { DOMParser } from '../../dom-parser/dom-parser.js'
import { Subject } from 'rxjs';

export class NewsScraper {

    /**
     * @param {DOMParser} domParser 
     */
    constructor(domParser) {
        this.domParser = domParser
        this.queries = []
        this.subject = new Subject()
    }

    /**
     * Observer design pattern
     */
    subscribe(observer) {
        return this.subject.subscribe(observer)
    }

    /**
     * @param {AbstractQuery[]} queries 
     */
    addQueries(queries) {
        this.queries = this.queries.concat(queries)
    }

    run() {
        this.subject.next(
            this.queries
                .map(query => this.domParser.runQuery(query))
                .reduce((a,b) => a.concat(b), [])
        )
    }
}
