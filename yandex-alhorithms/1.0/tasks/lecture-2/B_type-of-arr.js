function getTypeOfArr(arr) {
  let isConstant = true
  let isAscending = true
  let isWeaklyAscending = true
  let isDescending = true
  let isWeaklyDescending = true
  let prevNum = arr[0]

  for (let num of arr.slice(1)) {
    if (num !== prevNum) {
      isConstant = false
    } else {
      isAscending = false
      isDescending = false
    }
    if (num < prevNum) {
      isWeaklyAscending = false
      isAscending = false
    }
    if (num > prevNum) {
      isWeaklyDescending = false
      isDescending = false
    }

    prevNum = num
  }

  return isConstant ? 'CONSTANT'
    : isAscending ? 'ASCENDING'
      : isDescending ? 'DESCENDING'
        : isWeaklyAscending ? 'WEAKLY ASCENDING'
          : isWeaklyDescending ? 'WEAKLY DESCENDING'
            : 'RANDOM'
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().split('\n').map(item => parseInt(item)).slice(0, -2)

const result = getTypeOfArr(data)

fs.writeFileSync("output.txt", result.toString())