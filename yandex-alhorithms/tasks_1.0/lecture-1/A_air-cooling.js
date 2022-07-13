function airCooling(roomTem, condTem, setting) {
  if (setting === 'auto'
    || (setting === 'heat' && roomTem < condTem)
    || (setting === 'freeze' && roomTem > condTem)) {
    return condTem
  } else {
    return roomTem
  }
}


const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

let [firstLine, secondLine] = fileContent.toString().split('\n')
firstLine = firstLine.split(' ').map(item => parseInt(item))

const result = airCooling(firstLine[0], firstLine[1], secondLine)

fs.writeFileSync("output.txt", result.toString())