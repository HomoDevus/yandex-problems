function countHeight(blocks) {
  let uniqueBlocks = []

  for (let [width, height] of blocks) {
    uniqueBlocks[width] = uniqueBlocks[width] > height ? uniqueBlocks[width] : height
  }

  return uniqueBlocks.reduce((acc, curr) => acc += curr, 0)
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [fl, ...oth] = fileContent.toString().replace(/(\r)/gm, '').split('\n').filter(str => str.length)
oth = oth.map(item => item.split(' ').filter(str => str.length).map(num => parseInt(num)))

const result = countHeight(oth)

fs.writeFileSync('output.txt', result.toString())