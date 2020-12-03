import { ArgumentParser } from "argparse"

const argParser = new ArgumentParser({
    description: 'Um scraper de notícias respeitando os princípios SO do SOLID'
})

argParser.add_argument('-t', '--target', { help: 'Site para buscar as notícias' })
argParser.add_argument('-s', '--sep', { help: 'Separador do csv' })
argParser.add_argument('-o', '--output', { help: 'Pasta para escrever arquivos de saída' })

export default argParser
