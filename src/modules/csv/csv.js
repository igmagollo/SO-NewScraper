import { News } from '../news-scraper/classes/news.js'
import fs from 'fs'

export class CSV {
    constructor(separator, output) {
        this.separator = separator
        this.output = output
    }

    /**
     * Escreve o conteudo em um arquivo csv
     * @param {News[]} content 
     * @param {string} filename 
     */
    writeCSV(content, filename) {
        if (!fs.existsSync(this.output))
            fs.mkdirSync(this.output)
        const fd = fs.openSync(this.output + '/' + filename, 'w')        
        const header = Object.keys(content[0])
        fs.writeSync(fd, header.join(this.separator) + '\n')
        content.map(line => fs.writeSync(fd, Object.values(line).join(this.separator) + '\n'))
        fs.closeSync(fd)
    }

    writeObserver(filename) {
        return {
            next: (content) => this.writeCSV(content, filename)
        }
    }
}
