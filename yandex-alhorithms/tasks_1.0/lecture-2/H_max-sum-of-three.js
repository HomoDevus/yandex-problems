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
  let firstLeastNeg = -Infinity
  let secondLeastNeg = -Infinity
  let thirdLeastNeg = -Infinity

  function moveToLeastNeg(num) {
    if (num !== Infinity) {
      if (num > firstLeastNeg) {
        thirdLeastNeg = secondLeastNeg
        secondLeastNeg = firstLeastNeg
        firstLeastNeg = num
      } else if (num > secondLeastNeg) {
        thirdLeastNeg = secondLeastNeg
        secondLeastNeg = num
      } else if (num > thirdLeastNeg) {
        thirdLeastNeg = num
      }
    }
  }

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
        moveToLeastNeg(thirdNegativeMax)
        thirdNegativeMax = secondNegativeMax
        secondNegativeMax = firstNegativeMax
        firstNegativeMax = arr[i]
      } else if (arr[i] < secondNegativeMax) {
        moveToLeastNeg(thirdNegativeMax)
        thirdNegativeMax = secondNegativeMax
        secondNegativeMax = arr[i]
      } else if (arr[i] < thirdNegativeMax) {
        moveToLeastNeg(thirdNegativeMax)
        thirdNegativeMax = arr[i]
      } else if (arr[i] > firstLeastNeg && arr[i] < 0) {
        thirdLeastNeg = secondLeastNeg
        secondLeastNeg = firstLeastNeg
        firstLeastNeg = arr[i]
      } else if (arr[i] > secondLeastNeg && arr[i] < 0) {
        thirdLeastNeg = secondLeastNeg
        secondLeastNeg = arr[i]
      } else if (arr[i] > thirdLeastNeg && arr[i] < 0) {
        thirdLeastNeg = arr[i]
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
  if (firstLeastNeg !== -Infinity) {
    ansArr.push(firstLeastNeg)
  }
  if (secondLeastNeg !== -Infinity) {
    ansArr.push(secondLeastNeg)
  }
  if (thirdLeastNeg !== -Infinity) {
    ansArr.push(thirdLeastNeg)
  }

  // console.log(firstLeastNeg, secondLeastNeg, thirdLeastNeg)
  // console.log(ansArr)

  return slowSolution(ansArr)

  // ansArr.sort((a, b) => a - b)

  // let firstOption = ansArr[0] * ansArr[1] * ansArr[2]
  // let secondOption = ansArr[ansArr.length - 1] * ansArr[ansArr.length - 2] * ansArr[ansArr.length - 3]
  // let thirdOption = ansArr[0] * ansArr[1] * ansArr[ansArr.length - 1]

  // console.log(ansArr)
  // console.log(firstOption, secondOption, thirdOption)

  // if (firstOption > secondOption && firstOption > thirdOption) {
  //   return `${ansArr[0]} ${ansArr[1]} ${ansArr[2]}`
  // } else if (secondOption > firstOption && secondOption > thirdOption) {
  //   return `${ansArr[ansArr.length - 1]} ${ansArr[ansArr.length - 2]} ${ansArr[ansArr.length - 3]}`
  // } else {
  //   return `${ansArr[0]} ${ansArr[1]} ${ansArr[ansArr.length - 1]}`
  // }
}

function slowSolution(arr) {
  let max = -Infinity
  let maxValues = []

  for (let i = 0; i < arr.length; i++) {
    for (let i1 = i; i1 < arr.length; i1++) {
      if (i === i1) {
        continue
      }
      for (let i2 = i1; i2 < arr.length; i2++) {
        if (i1 === i2) {
          continue
        }
        let sum = arr[i] * arr[i1] * arr[i2]
        if (sum > max) {
          max = sum
          maxValues = [arr[i], arr[i1], arr[i2]]
        }
      }
    }
  }

  return maxValues.join(' ')
}

function isEqual(a, b) {
  a = a.split(' ').map(item => Math.abs(item)).sort((a, b) => a - b)
  b = b.split(' ').map(item => Math.abs(item)).sort((a, b) => a - b)

  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

function generateTests() {
  for (let items = 3; items < 20; items++) {
    for (let iter = 0; iter < 1000; iter++) {
      let testValues = []

      for (let itemIndex = 0; itemIndex < items; itemIndex++) {
        testValues.push(Math.floor(Math.random() * 10 - 5) || 1)
      }

      // console.log(testValues)

      let fastSolutionRes = findMaxSum(testValues)
      let slowSolutionRes = slowSolution(testValues)

      if (!isEqual(fastSolutionRes, slowSolutionRes)) {
        console.log(testValues)
        console.log('Fast ans: ', fastSolutionRes)
        console.log('Slow ans: ', slowSolutionRes)
        console.log('\n')
      }
    }
  }
}

generateTests()

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let data = fileContent.toString().split(' ').map(item => parseInt(item))

const result = findMaxSum(data)

fs.writeFileSync('output.txt', result.toString())