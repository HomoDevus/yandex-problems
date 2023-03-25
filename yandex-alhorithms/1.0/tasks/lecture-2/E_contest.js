function getPlace(arr) {
  let maxScore = -Infinity
  let isFound = false
  if (arr.length < 3) return 0
  let winner = -Infinity
  let winnerIndex

  for (let [index, num] of arr.entries()) {
    if (num > winner) {
      winner = num
      winnerIndex = index
    }
  }

  for (let i = winnerIndex + 1; i < arr.length - 1; i++) {
    if ((arr[i] % 10 === 5 || arr[i] === 5) && arr[i] > arr[i + 1] && maxScore < arr[i]) {
      maxScore = arr[i]
      isFound = true
    }
  }

  if (isFound) {
    arr = arr.sort((a, b) => b - a)
    return arr.findIndex(item => item === maxScore) + 1
  } else {
    return 0
  }
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [, data] = fileContent.toString().split('\n')
data = data.split(' ').map(item => parseInt(item))

const result = getPlace(data)

fs.writeFileSync('output.txt', result.toString())