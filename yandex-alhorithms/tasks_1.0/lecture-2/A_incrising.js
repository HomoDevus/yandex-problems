function isIncrising(arr) {
  let prev = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= prev) {
      return 'NO'
    }
    prev = arr[i]
  }

  return 'YES'
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().split(' ').map(item => parseInt(item))

const result = isIncrising(data)

fs.writeFileSync("output.txt", result.toString())