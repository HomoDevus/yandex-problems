function getIntersections(aArr, bArr) {
  let setA = new Set(aArr)
  let setB = new Set(bArr)
  let intersections = []

  for (let aNum of setA) {
    if (setB.has(aNum)) {
      intersections.push(aNum)
    }
  }

  return intersections.sort((a, b) => a - b).join(' ')
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [firstLine, secondLine] = fileContent.toString().split('\n')
firstLine = firstLine.split(' ').map(item => parseInt(item))
secondLine = secondLine.split(' ').map(item => parseInt(item))

const result = getIntersections(firstLine, secondLine)

fs.writeFileSync('output.txt', result.toString())