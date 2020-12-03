# SO-NewScraper

Um scraper de notícias respeitando os princípios SO do SOLID

`Obs: Node versão 14.15.1`

Antes de rodar, instale as dependencias:

```
yarn install
```

Exemplo de uso:
```
yarn start -t globo -s ';' -o output
```

Este projeto utiliza três Design Patterns para suportar extensão para novos sites de notícias e suportar mais pós processamentos (algoritmos aplicados nas noticícias já scrapadas); eles são **Factory**, **Command** (disfarçado como AbstractQuery) e **Observer** (através da biblioteca ```rxjs```).

- **Factory** é usado para encapsular a configuração de uma classe ```NewsScraper``` para um site de notícias específico. Isso é necessário pois diferentes sites possuem diferentes layouts, fazendo com que seja necessário diferentes configurações para extrair a informação correta. Com esse Design Pattern é possível extender a extração para diferentes sites.

- **Command** é utilizado para encapsular queries que são feitas para o DOM. Dessa forma é possível adicionar objetivos único e diferentes para cada query sem que o ```DOMParser``` se responsabilize por isso. Além disso, diferentes sites possuem a necessidade de diferentes queries.

- **Observer** é utilizado para adicionar rotinas diferentes aplicadas a uma variavel que esta sendo observada. Com esse padrão é possível criar várias rotinas que se aplicam ao mesmo tempo na saída das notícias extraídas, sem a necessidade de modificar muito o programa príncipal, basta criar um novo módulo com a rotina e inscrever essa rotina na saída da extração.
----

## Como extender a implementação

- **Mais sites de notícias:** em ```scr/modules/sites/``` crie a pasta do novo site, nessa pasta, crie as queries para extrair as notícias extendendo ```AbstractQuery``` (classes abstratas não existem em Js mas dessa forma fica bem legível). Na sequência crie uma Factory para encapsular a configuração do novo site (url + queries). Por ultimo, adicione no arquivo ```site-map.js``` a propriedade com o nome do seu novo site como chave carregando a nova Factory como valor (uma forma de indexação). Pronto, ao utilizar essa chave no parâmetro ```-t``` o programa será capaz de extrair notícias do novo site.

- **Mais rotinas aplicadas nas notícias extraídas:** basta criar seu novo módulo com sua nova rotina, adicionar um método para gerar um ```PartialObserver``` (rxjs, basicamente um objeto com uma propriedade next, que carregará a rotina) e inscrever esse método na classe ```NewsScraper``` que fará a extração.