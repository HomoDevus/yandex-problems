function findNumberPlate(witnessed, suspected) { // witnessed = ABC, A37, BCDA; suspected = [ A317BD, B137AC ]
  let suspectedProbabilities = suspected.reduce(
    (prev, curr) => {
      prev[curr] = 0
      return prev
    },
    {}
  )
  let maxSuspected = 0
  let mostSuspected = []

  for (let suspectedNum of suspected) { // A143BC
    let suspectedNumSet = new Set(suspectedNum)

    for (let witnessedNumber of witnessed) { // 1ABC
      witnessedNumber = new Set(witnessedNumber)
      let isSubSet = true

      for (let witnessedLetter of witnessedNumber) {
        if (!suspectedNumSet.has(witnessedLetter)) {
          isSubSet = false
          break
        }
      }

      if (isSubSet) {
        suspectedProbabilities[suspectedNum] += 1
      }
    }
  }

  maxSuspected = Math.max(...Object.values(suspectedProbabilities))

  for (let number of suspected) {
    if (suspectedProbabilities[number] === maxSuspected) {
      mostSuspected.push(number)
    }
  }

  return mostSuspected.join('\n')
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let witnessed = []
let suspected = []
let isAddingSuspected = false
let input = fileContent.trim().split('\n').map(item => item.trim())


for (let item of input.slice(1)) {
  if (Number(item)) {
    isAddingSuspected = true
  } else {
    if (isAddingSuspected) {
      suspected.push(item)
    } else {
      witnessed.push(item)
    }
  }
}

const result = findNumberPlate(witnessed, suspected)

fs.writeFileSync('output.txt', result.toString())

// first iteration

// function findNumberPlate(witnessed, suspected) { // witnessed = ABC, A37, BCDA; suspected = [ A317BD, B137AC ]
//   let witnessedDict = {} // {A: 1}
//   let suspectedProbabilities = {}
//   let maxSuspected = 0
//   let mostSuspected = []
//
//   for (let witnessedNumber of witnessed) { // ABC
//     for (let letter of new Set(witnessedNumber)) { // A
//       if (!witnessedDict[letter]) {
//         witnessedDict[letter] = 0
//       }
//
//       witnessedDict[letter] += 1
//     }
//   }
//
//   for (let suspectedNumber of suspected) { // A317BD
//     suspectedProbabilities[suspectedNumber] = 0
//
//     for (let letter of new Set(suspectedNumber)) {
//       if (witnessedDict[letter]) {
//         suspectedProbabilities[suspectedNumber] += witnessedDict[letter]
//       }
//     }
//   }
//
//   maxSuspected = Math.max(...Object.values(suspectedProbabilities))
//
//   for (let number of suspected) {
//     if (suspectedProbabilities[number] === maxSuspected) {
//       mostSuspected.push(number)
//     }
//   }
//
//   return mostSuspected.join('\n')
// }
//
// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// let witnessed = []
// let suspected = []
// let isAddingSuspected = false
// let input = fileContent.trim().split('\n').map(item => item.trim())
//
//
// for (let item of input.slice(1)) {
//   if (Number(item)) {
//     isAddingSuspected = true
//   } else {
//     if (isAddingSuspected) {
//       suspected.push(item)
//     } else {
//       witnessed.push(item)
//     }
//   }
// }
//
// const result = findNumberPlate(witnessed, suspected)
//
// fs.writeFileSync("output.txt", result.toString())