function findMostCommonWord(text) {
  let dict = {}
  let mostCommon
  let mostCommonCount = 0

  for (let word of text) {
    if (!dict[word]) {
      dict[word] = 0
    }

    dict[word] += 1

    if (dict[word] > mostCommonCount) {
      mostCommon = word
      mostCommonCount = dict[word]
    } else if (dict[word] === mostCommonCount && word < mostCommon) {
      mostCommon = word
    }
  }

  return mostCommon
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let text = fileContent.toString().replace(/(\r\n|\n)/gm, ' ').split(' ').filter(item => item.length)

const result = findMostCommonWord(text)

fs.writeFileSync('output.txt', result.toString())