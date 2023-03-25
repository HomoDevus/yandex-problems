function countLetters(text) {
  const lettersStack = {}
  let maxLettersAmount = 0

  for (const letter of text) {
    if (letter === ' ' || letter === '\n') continue

    if (!(letter in lettersStack)) {
      lettersStack[letter] = []
    }

    lettersStack[letter].push('#')

    if (lettersStack[letter].length > maxLettersAmount) {
      maxLettersAmount = lettersStack[letter].length
    }
  }

  return [lettersStack, maxLettersAmount]
}

function buildGestogram(countedLetters, maxLettersAmount) {
  let gestogram = ''
  const sortedLetters = Object.keys(countedLetters).sort()

  for (let currLetterAmount = maxLettersAmount - 1; currLetterAmount >= 0; currLetterAmount--) {
    for (const letter of sortedLetters) {
      gestogram += countedLetters[letter][currLetterAmount] ? '#' : ' '
    }

    gestogram += '\n'
  }

  for (const letterStr of sortedLetters) {
    gestogram += letterStr
  }

  return gestogram
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

const text = fileContent.trim()
const [lettersStack, maxLettersAmount] = countLetters(text)
const result = buildGestogram(lettersStack, maxLettersAmount)

fs.writeFileSync('output.txt', result.toString())