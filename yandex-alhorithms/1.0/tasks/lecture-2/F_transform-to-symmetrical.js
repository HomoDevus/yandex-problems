function isSymmetrical(arr) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex < rightIndex) {
    if (arr[leftIndex] !== arr[rightIndex]) {
      return false
    } else {
      leftIndex += 1
      rightIndex -= 1
    }
  }
  return true
}

function makeSymmetrical(arr) {
  if (isSymmetrical(arr)) return 0
  let secondPart = []

  for (let i = 0; i < arr.length + 0.5; i += 0.5) {
    secondPart = arr.slice(0, Math.ceil(i)).reverse()
    let checkArr = arr.concat(secondPart)

    if (isSymmetrical(checkArr)) {
      return `${secondPart.length}\n${secondPart.join(' ')}`
    }
  }
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [, data] = fileContent.toString().split('\n')
data = data.split(' ').map(item => parseInt(item)).filter(item => Boolean(item))

const result = makeSymmetrical(data)

fs.writeFileSync('output.txt', result.toString())