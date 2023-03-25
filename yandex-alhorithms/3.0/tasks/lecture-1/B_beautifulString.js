// function findLongestSeq(string, replaceAmount) {
//   let maxSeq = 0
//
//   for (let i = 0; i < string.length; i++) {
//     let currReplaceAmount = replaceAmount
//     let currIndex = i
//
//     while (currReplaceAmount >= 0 && currIndex < string.length) {
//       currIndex++
//
//       if (string[i] !== string[currIndex]) {
//         currReplaceAmount--
//       }
//     }
//
//     let sequenceLength = currIndex - i
//
//     if (sequenceLength > maxSeq) {
//       maxSeq = sequenceLength
//     }
//   }
//
//   return maxSeq
// }

function findLongestSeq(string, replaceAmount) {
  if (string.length <= replaceAmount) {
    return string.length
  }

  let counter = {}
  let leftIndex = 0
  let rightIndex = 0

  while (rightIndex < string.length) {

  }
}



const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

function parseNumbersLine(str) {
  return str.trim().split(' ').map(item => parseInt(item))
}

let [replaceAmount, string] = fileContent.trim().split('\n')
replaceAmount = Number(replaceAmount)
const result = findLongestSeq(string, replaceAmount)

fs.writeFileSync('output.txt', result.toString())