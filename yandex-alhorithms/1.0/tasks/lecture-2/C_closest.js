function findClosest(arr, target) {
  let closest = null
  let closestDiff = Infinity
  let diff

  for (let num of arr) {
    diff = Math.abs(target - num)

    if (diff < closestDiff) {
      closest = num
      closestDiff = diff
    }
  }

  return closest
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

let [, sl, tl] = fileContent.toString().split('\n')
sl = sl.split(' ').map(item => parseInt(item))

const result = findClosest(sl, parseInt(tl))

fs.writeFileSync("output.txt", result.toString())