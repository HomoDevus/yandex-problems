function getAmountOfWords(string) {
  let set = new Set(string.split(/ |\r|\n/))
  set.delete('')
  return set.size
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let data = fileContent.toString()

const result = getAmountOfWords(data)

fs.writeFileSync('output.txt', result.toString())