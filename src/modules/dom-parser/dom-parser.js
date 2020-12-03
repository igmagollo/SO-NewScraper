import got from 'got'
import { JSDOM } from 'jsdom'
import { AbstractQuery } from '../news-scraper/abstracts/abstract-query.js'

/**
 * DOMParser é uma classe responsável apenas pelo parse do HTML (DOM).
 * Essa classe mantém acoplado a URL da página que deve ser parseada, a
 * pagina em si já parseada e esconde a complexidade de como é feito o
 * parsing. 
 */
export class DOMParser {
    constructor(url) {
        this.url = url
    }

    async parsePage() {
        const response = await got(this.url)
        this.parsedDOM = new JSDOM(response.body)
        return this
    }

    /**
     * Roda uma consulta na página parseada acoplada a essa classe
     * @param {AbstractQuery} query
     */
    runQuery(query) {
        if (!this.parsedDOM)
            throw new Error('DOM not parsed')
        return query.run(this.parsedDOM.window.document)
    }
}
