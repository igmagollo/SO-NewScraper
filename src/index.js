import { siteMap } from './modules/sites/site-map.js'

const site = 'globo'
const newsScraper = await siteMap[site].create()
const news = newsScraper.scrape()

console.log(news.length)

