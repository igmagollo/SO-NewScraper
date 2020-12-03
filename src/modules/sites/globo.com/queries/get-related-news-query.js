import { AbstractQuery } from "../../../news-scraper/abstracts/abstract-query.js"
import { News } from "../../../news-scraper/classes/news.js";

export class GetRelatedNewsQuery extends AbstractQuery {
    static run(doc) {
        return Object.values(
            doc.querySelectorAll('a.hui-premium__related-link')
        ).map(a => {
            return new News(
                'Relacionado',
                a.textContent.trim(),
                a.attributes.href.value,
            )
        })
    }
}
