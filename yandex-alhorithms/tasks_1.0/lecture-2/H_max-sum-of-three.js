function findMaxSum(arr) {
  if (arr.length === 1) {
    return `${arr[0]}`
  } else if (arr.length === 2) {
    return `${arr[0]} ${arr[1]}`
  }

  let firstMax = -Infinity
  let secondMax = -Infinity
  let thirdMax = -Infinity
  let firstNegativeMax = Infinity
  let secondNegativeMax = Infinity
  let thirdNegativeMax = Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      if (arr[i] > firstMax) {
        thirdMax = secondMax
        secondMax = firstMax
        firstMax = arr[i]
      } else if (arr[i] > secondMax) {
        thirdMax = secondMax
        secondMax = arr[i]
      } else if (arr[i] > thirdMax) {
        thirdMax = arr[i]
      }
    } else {
      if (arr[i] < firstNegativeMax) {
        thirdNegativeMax = secondNegativeMax
        secondNegativeMax = firstNegativeMax
        firstNegativeMax = arr[i]
      } else if (arr[i] < secondNegativeMax) {
        thirdNegativeMax = secondNegativeMax
        secondNegativeMax = arr[i]
      } else if (arr[i] < thirdNegativeMax) {
        thirdNegativeMax = arr[i]
      }
    }
  }

  let ansArr = []

  if (firstMax !== -Infinity) {
    ansArr.push(firstMax)
  }
  if (firstNegativeMax !== Infinity) {
    ansArr.push(firstNegativeMax)
  }
  if (secondMax !== -Infinity) {
    ansArr.push(secondMax)
  }
  if (secondNegativeMax !== Infinity) {
    ansArr.push(secondNegativeMax)
  }
  if (thirdMax !== -Infinity) {
    ansArr.push(thirdMax)
  }
  if (thirdNegativeMax !== Infinity) {
    ansArr.push(thirdNegativeMax)
  }

  ansArr.sort((a, b) => b - a)

  if (ansArr[0] * ansArr[1] * ansArr[2] >= ansArr[ansArr.length - 1] * ansArr[ansArr.length - 2] * ansArr[ansArr.length - 3]) {
    return `${ansArr[0]} ${ansArr[1]} ${ansArr[2]}`
  } else {
    return `${ansArr[ansArr.length - 1]} ${ansArr[ansArr.length - 2]} ${ansArr[ansArr.length - 3]}`
  }
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let data = fileContent.toString().split(' ').map(item => parseInt(item))

const result = findMaxSum(data)

fs.writeFileSync('output.txt', result.toString())