function getSynonym(dictionary, targetWord) {
  return dictionary[targetWord] || Object.keys(dictionary).find(key => dictionary[key] === targetWord)
}

function createDictionary(synGroups) {
  let dictionary = {}

  for (let [firstSyn, secondSyn] of synGroups) {
    dictionary[firstSyn] = secondSyn
  }

  return dictionary
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [firstLine, ...other] = fileContent.toString().replace(/\r/g, "").split('\n')
other = other.filter(item => item.length).map(item => item.split(' '))
let lastLine = other.pop()

const result = getSynonym(createDictionary(other), lastLine[0])

fs.writeFileSync('output.txt', result.toString())