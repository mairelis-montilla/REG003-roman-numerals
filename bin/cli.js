#!/usr/bin/env node
/* eslint-disable no-console */
const { parse, stringify } = require('../index');
const pkg = require('../package.json');

const [, , ...arg] = process.argv;

const help = `
  Usage: roman-numerals [opttions] <command> [<input>]
  Commands:
    parse <input>      Parse a roman numeral string into an integer.
    stringify <input>  Takes an integer and converts it to a roman numeral.
  Options:
    -h,--help     Show this help.
    -v,--version  Show version number.
`;
if (arg.includes('parse') && arg.includes('stringify')) {
  console.log('Use --help to get more instructions');
} else if (arg[0] === 'stringify') {
  console.log(stringify(parseInt(arg[1], 10)));
} else if (arg[0] === 'parse') {
  console.log(parse(arg[1]));
} else if (arg.includes('help') || arg.includes('-h')) {
  console.log(help);
} else if (arg.includes('version') || arg.includes('-v')) {
  console.log(`version ${pkg.version}`);
} else {
  console.log('Use --help to get more instructions');
}
