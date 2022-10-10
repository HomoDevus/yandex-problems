function countMinShots(birds) {
  let rows = new Set()

  for (let bird of birds) {
    rows.add(bird[0])
  }

  return rows.size
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [, ...left] = fileContent.toString().split('\n').filter(item => item.length)

left = left.map(item => item.split(' ').map(num => parseInt(num)))

const result = countMinShots(left)

fs.writeFileSync('output.txt', result.toString())