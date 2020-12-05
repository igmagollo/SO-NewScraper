import { AbstractQuery } from "../../../news-scraper/abstract-query.js"
import { News } from "../../../news-scraper/news.js";

export class GetSecondaryNewsQuery extends AbstractQuery {
    static run(doc) {
        return Object.values(
            doc.querySelectorAll('p.hui-highlight-title')
        ).map(p => {
            let link = p
            while (link.attributes.href === undefined)
                link = link.parentNode
            return new News(
                'Secundária',
                p.textContent.trim(),
                link.attributes.href.value,
            )
        })
    }
}
