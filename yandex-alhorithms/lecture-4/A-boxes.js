function countBoxes(boxes) {
  boxes = boxes.reduce(
    (prev, [color, amount]) => {
      if (!prev[color]) {
        prev[color] = 0
      }

      prev[color] += amount
      return prev
    },
    {})
  let res = []

  for (let [color, amount] of Object.entries(boxes).sort(
    (itemA, itemB) => itemA[0] - itemB[0])
    ) {
    res.push(color + ' ' + amount)
  }

  return res.join('\n')
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let input = fileContent.trim().split('\n').slice(1).map(str => str.trim().split(' ').map(num => num))

console.log(input)

const result = countBoxes(input)

fs.writeFileSync('output.txt', result.toString())