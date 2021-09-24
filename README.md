# Roman Numerals
En un módulo de JavaScript (instalable via npm) que permita al usuario converir números arábigos en números romanos y viceversa. El paquete (lo que instalamos a través de npm) también debe incluir un script ejecutable que nos permita usar la librería desde el terminal (CLI).

## Instalación

```ssh
npm i roman-numerals-mai
```
Para hacer uso de la API es necesario importar con
## Uso
- CLI
 ``` js
 Usage: roman-numerals [opttions] <command> [<input>]
  Commands:
    parse <input>      Parse a roman numeral string into an integer.
    stringify <input>  Takes an integer and converts it to a roman numeral.
  Options:
    -h,--help     Show this help.
    -v,--version  Show version number.
```
- Modulo
```js
const {parse, stringify} = require('roman-numerals-mai')
```
