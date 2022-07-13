function A_equalToMax(arr) {
  let max = arr[0]
  let maxCount = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      maxCount = 0
    }

    if (arr[i] === max) {
      maxCount += 1
    }
  }

  return maxCount
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

let input = fileContent.split('\n').map(item => parseInt(item))

const result = A_equalToMax(input)

fs.writeFileSync("output.txt", result.toString())