#!/usr/bin/env node
const {parse, stringify} =require('../index.js')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
if(argv.parse && argv.stringify){
  console.log('use only one command')
}
else if(argv.parse){
  console.log(parse(argv.parse))
}
else if(argv.stringify){
  console.log(stringify(argv.stringify))
}