function findMaxSum(arr) {
  let firstMax = -Infinity
  let secondMax = -Infinity
  let firstNegativeMax = Infinity
  let secondNegativeMax = Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      if (arr[i] > firstMax) {
        secondMax = firstMax
        firstMax = arr[i]
      } else if (arr[i] > secondMax) {
        secondMax = arr[i]
      }
    } else {
      if (arr[i] < firstNegativeMax) {
        secondNegativeMax = firstNegativeMax
        firstNegativeMax = arr[i]
      } else if (arr[i] < secondNegativeMax) {
        secondNegativeMax = arr[i]
      }
    }
  }

  if (secondNegativeMax !== Infinity && Math.abs(firstNegativeMax + secondNegativeMax) > firstMax + secondMax) {
    return `${firstNegativeMax} ${secondNegativeMax}`
  } else if (secondMax !== -Infinity) {
    return `${secondMax} ${firstMax}`
  } else {
    return `${firstNegativeMax} ${firstMax}`
  }
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let data = fileContent.toString().split(' ').map(item => parseInt(item))

const result = findMaxSum(data)

fs.writeFileSync('output.txt', result.toString())