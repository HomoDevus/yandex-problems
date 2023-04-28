const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

let numbers = fileContent.trim().split('\n')
numbers = parseNumbersLine(numbers)

fs.writeFileSync('output.txt', result.toString())