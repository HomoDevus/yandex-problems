function countHigherNeighboors(arr) {
  if (arr.length < 2) return 0
  let counter = 0

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      counter += 1
    }
  }

  return counter
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

let data = fileContent.toString().split(' ').map(item => parseInt(item))

const result = countHigherNeighboors(data)

fs.writeFileSync("output.txt", result.toString())