import argParser from './modules/arg-parser/arg-parser.js'
import { NewsScraperFactory } from './modules/news-scraper/news-scraper-factory.js'
import { siteMap } from './modules/sites/site-map.js'
import { CSV } from './modules/csv/csv.js'

const args = argParser.parse_args()

const newsScraperFactory = new NewsScraperFactory(siteMap)
const newsScraper = await newsScraperFactory.createUsingSiteMap(args.target)

const csv = new CSV(args.sep, args.output)

const filename = `${args.target}-${(new Date()).toString()}.csv`
// this method allow you to subscribe many observers in a row. Just to make it nice!
newsScraper.subscribeMany([
    csv.observer(filename),
])

newsScraper.run()
