function setFromNumber(number) {
  let set = new Set

  while (number > 9) {
    set.add(number % 10)
    number = Math.floor(number / 10)
  }

  set.add(number)

  return set
}

function getAmountOfNeededButtons(xyz, number) {
  let setOfNum = setFromNumber(number)
  let counter = 0

  for (let num of setOfNum) {
    if (!xyz.includes(num)) {
      counter += 1
    }
  }

  return counter
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [firstLine, secondLine] = fileContent.toString().split('\n')

const result = getAmountOfNeededButtons(firstLine.split(' ').map(item => parseInt(item)), parseInt(secondLine))

fs.writeFileSync('output.txt', result.toString())