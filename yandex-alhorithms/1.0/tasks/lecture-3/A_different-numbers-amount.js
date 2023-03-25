function countDifferent(arr) {
  let set = new Set(arr)

  return set.size
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let data = fileContent.toString().split(' ').map(item => parseInt(item))

const result = countDifferent(data)

fs.writeFileSync('output.txt', result.toString())