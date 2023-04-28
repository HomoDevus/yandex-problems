function buildPrefixSumTable(numbers) {
  let prefixSumTable = [0]

  for (let i = 0; i < numbers.length; i++) {
    prefixSumTable.push(numbers[i] + prefixSumTable[i])
  }

  return prefixSumTable
}

function getSum(from, to, prefixTable) {
  return prefixTable[to] - prefixTable[from - 1]
}

// function findMaxSequence(prefixTable, numbers) {
//   let maxIndex = 1
//   let minIndex = 1
//
//   for (let i = 2; i < prefixTable.length; i++) {
//     if (prefixTable[i] > prefixTable[maxIndex]) {
//       maxIndex = i
//     }
//   }
//
//   for (let i = 2; i <= maxIndex; i++) {
//     if (prefixTable[i] < prefixTable[minIndex]) {
//       minIndex = i
//     }
//   }
//
//   // console.log(minIndex, maxIndex, prefixTable)
//   // console.log(getSum(minIndex, maxIndex, prefixTable))
//
//   let res
//   if (maxIndex === minIndex) {
//     res = numbers[minIndex - 1]
//   } else {
//     res = getSum(minIndex, maxIndex, prefixTable)
//   }
//
//   return Math.max(res, ...numbers)
// }

function findMaxSequence(numbers) {
  let maxSum = numbers[0]
  let currPrefixSum = 0
  let minPrefixSum = currPrefixSum

  for (let number of numbers) {
    currPrefixSum += number



    let currSum = currPrefixSum - minPrefixSum
    if (currSum > maxSum) {
      maxSum = currSum
    }

    if (currPrefixSum < minPrefixSum) {
      minPrefixSum = currPrefixSum
    }
  }

  return maxSum
}



const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

let [_, numbers] = fileContent.trim().split('\n')
numbers = parseNumbersLine(numbers)

// const prefixSumTable = buildPrefixSumTable(numbers)
let result = findMaxSequence(numbers)
// console.log(findMaxSum(prefixSumTable))

fs.writeFileSync('output.txt', result.toString())

// ==== test ====
let arr = []

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// let a, b

// while (a === b) {
//   for (let len = 1; len < 5; len++) {
//     for (let ind = 0; ind < len; ind++) {
//       arr.push(getRandomArbitrary(-3, 3))
//     }
//
//     let prefixSumTable = buildPrefixSumTable(arr)
//     if (prefixSumTable.length === 2 && prefixSumTable[1] < 0) {
//       a = Math.max(...arr)
//     } else {
//       a = findMaxSum(prefixSumTable)
//     }
//     b = findMaxSequence(prefixSumTable, arr)
//
//     if (a !== b) {
//       console.log(arr, a, b)
//     }
//
//     arr = []
//   }
// }

function findMaxSum(prefixTable) {
  let max = -Infinity

  for (let leftIndex = 0; leftIndex < prefixTable.length - 1; leftIndex++) {
    for (let rightIndex = leftIndex + 1; rightIndex < prefixTable.length; rightIndex++) {
      max = Math.max(getSum(leftIndex + 1, rightIndex, prefixTable), max)
    }
  }

  return max
}

// function countPrefixSums(numbers) {
//   let currSum = 0
//   let prefixSums = { 0: 1 }
//
//   for (let num in numbers) {
//     currSum += num
//
//     if (!prefixSums[currSum]) {
//       prefixSums[currSum] = 0
//     }
//
//     prefixSums[currSum]++
//   }
//
//   return prefixSums
// }
//
// function countZerosRanges(prefixSums) {
//   let rangesAmount = 0
//
//   for ([num, sum] of prefixSums.entries()) {
//     rangesAmount += sum * Math.floor((sum - 1) / 2)
//   }
//
//   return rangesAmount
// }

// [0, 10, -4, 10, -12, 10]
// [0, -3, 10, -4, 10, -12, 10]
// [0, -3, 10, -11, 10, 10]
// [0, -3, 7, -4, 6, 16, -20]

// function shallow(numbers) {
//   if (numbers.length < 3) {
//     return numbers;
//   }
//
//   let index = 0
//   let shallowed = []
//
//   while (numbers[index] <= 0) {
//     shallowed.push(numbers[index])
//     index++
//   }
//   shallowed.push(numbers[index])
//   index++
//
//   while (index < numbers.length - 1) {
//     if (numbers[index] + numbers[index + 1] > 0) {
//       shallowed.push(numbers[index] + numbers[index + 1])
//       index += 2
//     }
//   }
// }
//
// function buildFoldedPrefixTable(numbers) {
//   let prefixTable = [0]
//   let currSum = 0
//
//   for (let i = 0; i < numbers.length; i++) {
//     if (currSum === 0 || (currSum < 0 && numbers[i] < 0) || (currSum > 0 && numbers[i] > 0)) {
//       currSum += numbers[i]
//     } else {
//       prefixTable.push(currSum + prefixTable[prefixTable.length - 1])
//       currSum = numbers[i]
//     }
//   }
//
//   prefixTable.push(currSum + prefixTable[prefixTable.length - 1])
//
//   return prefixTable
// }
