import argParser from './modules/arg-parser/arg-parser.js'
import { siteMap } from './modules/sites/site-map.js'
import { CSV } from './modules/csv/csv.js'

const args = argParser.parse_args()

const siteScrapeFactory = siteMap[args.target]
if (!siteScrapeFactory)
    throw new Error('Site not supported')

const newsScraper = await siteScrapeFactory.create()
const csv = new CSV(args.sep, args.output)

const filename = `${args.target}-${(new Date()).toString()}.csv`
newsScraper.subscribe(csv.observer(filename))


newsScraper.run()
