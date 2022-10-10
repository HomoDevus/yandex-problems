function countCubes(arrN, arrM) {
  let intersections = []

  for (let [i, numN] of arrN.entries()) {
    let cubeIndex = arrM.indexOf(numN)

    if (cubeIndex !== -1) {
      intersections.push(numN)

      arrN[i] = arrN[arrN.length - 1]
      arrN.pop()

      arrM[cubeIndex] = arrM[arrM.length - 1]
      arrM.pop()
    }
  }

  arrN = arrN.sort((a, b) => a - b)
  arrM = arrM.sort((a, b) => a - b)
  intersections = intersections.sort((a, b) => a - b)

  return intersections.length + '\n'
    + intersections.join(' ') + '\n'
    + arrN.length + '\n'
    + arrN.join(' ')  + '\n'
    + arrM.length  + '\n'
    + arrM.join(' ')  + '\n'
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [firstLine, ...otherLines] = fileContent.toString().split('\n')
let [amountN,] = firstLine.split(' ').map(item => parseInt(item))
otherLines = otherLines.map(item => parseInt(item))
let arrN = otherLines.slice(0, amountN)
let arrM = otherLines.slice(amountN, -1)


const result = countCubes(arrN, arrM)

fs.writeFileSync('output.txt', result.toString())