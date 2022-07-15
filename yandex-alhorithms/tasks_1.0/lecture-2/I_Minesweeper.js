function buildField(height, width, mines) {
  let field = []

  function isOnMine(x, y) {
    for (let mine of mines) {
      if (x === mine[0] - 1 && y === mine[1] - 1) {
        return true
      }
    }

    return false
  }

  function minesAround(x, y) {
    let minesCount = 0

    if (x + 1 <= height - 1) {
      if (isOnMine(x + 1, y)) {
        minesCount += 1
      }
    }
    if (x - 1 >= 0) {
      if (isOnMine(x - 1, y)) {
        minesCount += 1
      }
    }
    if (y + 1 <= width - 1) {
      if (isOnMine(x, y + 1)) {
        minesCount += 1
      }
    }
    if (y - 1 >= 0) {
      if (isOnMine(x, y - 1)) {
        minesCount += 1
      }
    }
    if (x - 1 >= 0 && y - 1 >= 0) {
      if (isOnMine(x - 1, y - 1)) {
        minesCount += 1
      }
    }
    if (x - 1 >= 0 && y + 1 <= width - 1) {
      if (isOnMine(x - 1, y + 1)) {
        minesCount += 1
      }
    }
    if (x + 1 <= height - 1 && y - 1 >= 0) {
      if (isOnMine(x + 1, y - 1)) {
        minesCount += 1
      }
    }
    if (x + 1 <= height - 1 && y + 1 <= width - 1) {
      if (isOnMine(x + 1, y + 1)) {
        minesCount += 1
      }
    }
    return minesCount
  }

  for (let row = 0; row < height; row++) {
    field.push([])

    for (let column = 0; column < width; column++) {
      if (isOnMine(row, column)) {
        field[row].push('*')
      } else {
        field[row].push(minesAround(row, column))
      }
    }
  }

  return field
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [firstLine, ...mines] = fileContent.toString().split('\n')
firstLine = firstLine.split(' ')
mines = mines.map(item => item.split(' ').map(pos => parseInt(pos)))

let result = buildField(firstLine[0], firstLine[1], mines)

result = result.map(item => item.join(' ')).join('\n')

fs.writeFileSync('output.txt', result.toString())