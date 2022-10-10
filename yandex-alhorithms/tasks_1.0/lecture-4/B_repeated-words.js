function countRepeatedWords(words) {
  console.log(words)
  let wordsDict = {}
  let numbers = []

  for (let word of words) {
    if (!wordsDict[word]) {
      wordsDict[word] = 0
    }

    numbers.push(wordsDict[word])

    wordsDict[word] += 1
  }

  return numbers.join(' ')
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let text = fileContent.toString().replace(/(\r\n|\n)/gm, ' ').split(' ').filter(item => item.length)

const result = countRepeatedWords(text)

fs.writeFileSync('output.txt', result.toString())