function getCount(foldersAmount, folders) {
  let maxCert = Math.max(...folders)
  let certSum = folders.reduce((acc, curr) => acc += curr, 0)

  return certSum - maxCert
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

let [firstLine, secondLine] = fileContent.toString().split('\n')
firstLine = parseInt(firstLine)
secondLine = secondLine.split(' ').map(item => parseInt(item))

const result = getCount(firstLine, secondLine)

fs.writeFileSync("output.txt", result.toString())