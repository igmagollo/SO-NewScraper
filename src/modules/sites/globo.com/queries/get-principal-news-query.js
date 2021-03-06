import { AbstractQuery } from "../../../news-scraper/abstract-query.js"
import { News } from "../../../news-scraper/news.js";

export class GetPrincipalNewsQuery extends AbstractQuery {
    static run(doc) {
        return Object.values(
            doc.querySelectorAll('a.hui-premium__link')
        ).map(a => {
            return new News(
                'Principal',
                a.textContent.trim(),
                a.attributes.href.value,
            )
        })
    }
}
