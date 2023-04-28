function buildPrefixSumTable(numbers) {
  let prefixSumTable = [0]

  for (let i = 0; i < numbers.length; i++) {
    prefixSumTable.push(numbers[i] + prefixSumTable[i])
  }

  return prefixSumTable
}

function getSum(from, to, prefixTable) {
  return prefixTable[to] - prefixTable[from - 1]
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

let [_, numbers, ...sumPrompts] = fileContent.trim().split('\n')
numbers = parseNumbersLine(numbers)

const prefixSumTable = buildPrefixSumTable(numbers)
const result = []

for (let sumPrompt of sumPrompts) {
  sumPrompt = parseNumbersLine(sumPrompt)
  result.push(getSum(sumPrompt[0], sumPrompt[1], prefixSumTable))
}

fs.writeFileSync("output.txt", result.join('\n'))