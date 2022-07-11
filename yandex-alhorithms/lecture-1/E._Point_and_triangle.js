function isInsideTriangle(cat, x, y) {
  if (x >= 0 && y >= 0) {
    if (x <= cat && y <= cat && x + y <= cat) {
      return 0
    }
  } else if (x < 0 && y < 0) {
    return 1
  } else if (x < 0) {
    if (y > cat / 2) {
      return 3
    } else {
      return 1
    }
  } else if (y < 0) {
    if (x > cat / 2) {
      return 2
    } else {
      return 1
    }
  } else if (x < cat / 2 && y < cat / 2) {
    return 1
  }

  let relToB = cat - y
  let relToC = cat - x

  console.log(relToB, relToC)

  if (relToB >= relToC) {
    return 2
  } else {
    return 3
  }
}

isInsideTriangle(4, 2, 2)

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [cat, xy] = fileContent.split('\n')
cat = parseInt(cat)
let [x, y] = xy.split(' ').map(item => parseInt(item))

const result = isInsideTriangle(cat, x, y)

fs.writeFileSync('output.txt', result.toString())