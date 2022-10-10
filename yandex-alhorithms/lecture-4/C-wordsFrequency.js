function getWordsByFrequency(words) {
  let wordsDict = {}
  let wordsArr

  for (let word of words) {
    if (!wordsDict[word]) {
      wordsDict[word] = 0
    }

    wordsDict[word] += 1
  }

  wordsArr = Object.entries(wordsDict).map(item => [item[1], item[0]]).sort(
    (a, b) => a[0] === b[0] ? a[1].localeCompare(b[1]) : b[0] - a[0]
  ).map(item => item[1])

  return wordsArr.join('\n')
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let input = fileContent.trim().split(/[ \n]/).map(str => str.trim())

const result = getWordsByFrequency(input)

fs.writeFileSync('output.txt', result.toString())