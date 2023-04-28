function getPossibleTune(changes) {
  let topBorder = 4000
  let bottomBorder = 30
  let prevNum = changes[0][0]
  let prevDirection = null

  for (let i = 1; i < changes.length; i++) {
    let num = changes[i][0]
    let direction = changes[i][1]
    let changeHalf = (prevNum - num) / 2

    if (Math.abs(num - prevNum) < 10 ** (-6)) continue

    if (changeHalf > 0) {
      if (direction === 'closer') {
        let res = num + changeHalf
        if (res < topBorder) {
          topBorder = res
        }
      } else {
        let res = num + changeHalf
        if (res > bottomBorder) {
          bottomBorder = res
        }
      }
    } else if (changeHalf < 0) {
      if (direction === 'closer') {
        let res = num - Math.abs(changeHalf)
        if (res > bottomBorder) {
          bottomBorder = res
        }
      } else {
        let res = num - Math.abs(changeHalf)
        if (res < topBorder) {
          topBorder = res
        }
      }
    }

    prevDirection = direction
    prevNum = num
  }

  return `${Math.min(bottomBorder, topBorder)} ${Math.max(bottomBorder, topBorder)}`
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [, ...data] = fileContent.toString().split('\n')
data = data.map(item => {
  item = item.split(' ')
  item[0] = parseInt(item[0])
  if (item[1]) {
    item[1] = item[1].replace(/(\r\n|\n|\r)/gm, '');
  }

  return item
}).filter(item => !isNaN(item[0]))

const result = getPossibleTune(data)

fs.writeFileSync('output.txt', result.toString())