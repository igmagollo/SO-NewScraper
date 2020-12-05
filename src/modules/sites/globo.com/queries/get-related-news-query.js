import { AbstractQuery } from "../../../news-scraper/abstract-query.js"
import { News } from "../../../news-scraper/news.js";

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
