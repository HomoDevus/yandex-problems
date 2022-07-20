function countCubes(setN, setM) {
  let intersections = new Set

  for (let numN of setN) {
    if (setM.has(numN)) {
      intersections.add(numN)
    }
  }


  for (let intersection of intersections) {
    setN.delete(intersection)
    setM.delete(intersection)
  }

  return intersections.size + '\n'
    + [...intersections].sort((a, b) => a - b).join(' ') + '\n'
    + setN.size + '\n'
    + [...setN].sort((a, b) => a - b).join(' ')  + '\n'
    + setM.size  + '\n'
    + [...setM].sort((a, b) => a - b).join(' ')  + '\n'
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [firstLine, ...otherLines] = fileContent.toString().split('\n')
let [amountN,] = firstLine.split(' ').map(item => parseInt(item))
let arrN = new Set(otherLines.slice(0, amountN))
let arrM = new Set(otherLines.slice(amountN, -1))


const result = countCubes(arrN, arrM)

fs.writeFileSync('output.txt', result.toString())