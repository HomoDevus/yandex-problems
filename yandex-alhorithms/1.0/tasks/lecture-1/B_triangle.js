function isTrianglePossible(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    return 'YES'
  } else {
    return 'NO'
  }
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

let sides = fileContent.toString().split('\n').map(item => parseInt(item))

const result = isTrianglePossible(...sides)

fs.writeFileSync("output.txt", result.toString())