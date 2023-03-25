function findTruth(amount, turtles) {
  let truths = new Array(amount).fill(false)

  for (let turtle of turtles) {
    if (turtle[0] + turtle[1] + 1 === amount || (amount === 1 && turtle[0] === 0 && turtle[1] === 0)) {
      truths[turtle[0]] = true
    }
  }

  return truths.reduce((acc, curr) => curr ? ++acc : acc, 0)
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [firstLine, ...left] = fileContent.toString().split('\n')
firstLine = parseInt(firstLine)
left = left.map(item => item.split(' ').map(num => parseInt(num)))

const result = findTruth(firstLine, left)

fs.writeFileSync('output.txt', result.toString())