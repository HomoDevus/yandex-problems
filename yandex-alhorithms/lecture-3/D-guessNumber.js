function numberGuess(maxNum, guessed, notGuessed) {
  let ans = new Set()

  for (let guessedLine of guessed) {
    if (ans.size) {
      for (let ansNum of ans) {
        if (!guessedLine.has(ansNum)) {
          ans.delete(ansNum)
        }
      }
    } else {
      ans = guessedLine
    }
  }

  for (let notGuessedNum of notGuessed) {
      if (ans.has(notGuessedNum)) {
        ans.delete(notGuessedNum)
      }
  }

  if (ans.size) {
    return Array.from(ans).join(' ')
  } else {
    let ans = []

    for (let i = 1; i <= maxNum; i++) {
      if (!notGuessed.has(i)) {
        ans.push(i)
      }
    }

    return ans.join(' ')
  }
}

function parseInput(inputLines) {
  let maxNum = parseInt(inputLines[0])
  let guessed = []
  let notGuessed = []

  for (let i = 1; i < inputLines.length - 1; i += 2) {
    let numbers = inputLines[i].trim().split(' ').map(num => parseInt(num))

    if (inputLines[i + 1] === 'YES') guessed.push(new Set(numbers))
    else notGuessed.push(...numbers)
  }

  return [maxNum, guessed, new Set(notGuessed)]
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let input = fileContent.trim().split('\n').map(str => str.trim())
input = parseInput(input)

const result = numberGuess(...input)

fs.writeFileSync('output.txt', result.toString())

// First iteration

// function numberGuess(maxNum, guessed, notGuessed) { // maxNum = 10; guessed = [1]; notGuessed = [2, 3, 4, 5, 6, 7, 8, 9, 10]
//   let areInGuessed = new Array(maxNum + 1).fill(0) // 0 = undef, 1 = not guessed, 2 = guessed
//
//   for (let guessedIndex of guessed) {
//     areInGuessed[guessedIndex] = 2
//   }
//
//   for (let notGuessedIndex of notGuessed) {
//     if (areInGuessed[notGuessedIndex] === 2) {
//       areInGuessed[notGuessedIndex] = 0
//     } else {
//       areInGuessed[notGuessedIndex] = 1
//     }
//   }
//
//   console.log(areInGuessed.slice(1).join(' '))
//
//   if (guessed.length === 0) {
//     return areInGuessed.slice(1).reduce(
//       (prev, curr, index) => {
//         if (curr === 0) {
//           prev.push(index)
//         }
//
//         return prev
//       },
//       []).join(' ')
//   } else {
//     let lastNoIndex = 0
//     let firstYesIndex = 0 // 1
//     let ans = [] // [1]
//
//     // [0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1]
//
//     for (let i = 1; i < areInGuessed.length; i++) { // 2
//       let currState = areInGuessed[i]
//
//       if (currState === 1) {
//         lastNoIndex = i
//       } else if (currState === 2) {
//         firstYesIndex = i
//         break
//       }
//     }
//
//     for (let i = lastNoIndex + 1; i < areInGuessed.length; i++) {
//       let currState = areInGuessed[i] // 2
//       if (currState === 1) {
//         break
//       }
//
//       ans.push(i)
//     }
//
//     return ans.join(' ')
//   }
// }

// Second iteration
//
// function numberGuess(maxNum, guessed, notGuessed) { // maxNum = 10; guessed = [1]; notGuessed = [2, 3, 4, 5, 6, 7, 8, 9, 10]
//   let areInGuessed = new Array(maxNum + 1).fill(0) // 0 = undef, 1 = not guessed, 2 = guessed
//
//   for (let guessedIndex of guessed) {
//     areInGuessed[guessedIndex] = 2
//   }
//
//   for (let notGuessedIndex of notGuessed) {
//     areInGuessed[notGuessedIndex] = 1
//   }
//
//   return areInGuessed.reduce((prev, currState, index) => {
//     if (currState === 2) {
//       prev.push(index)
//     }
//
//     return prev
//   }, []).join(' ')
// }

// Third iteration
// function numberGuess(maxNum, questions) { // maxNum = 10; guessed = [1]; notGuessed = [2, 3, 4, 5, 6, 7, 8, 9, 10]
//   let areInGuessed = new Array(maxNum + 1).fill(0) // 0 = undef, 1 = not guessed, 2 = guessed
//   let ans = []
//
//   for (let questionSet of questions) {
//     if (questionSet[0] === 'YES') {
//       for (let num of questionSet.slice(1)) {
//         areInGuessed[num] = 2
//       }
//     } else if (questionSet[0] === 'NO') {
//       for (let num of questionSet.slice(1)) {
//         areInGuessed[num] = 1
//       }
//     }
//   }
//
//   console.log(areInGuessed.slice(1).join(' '))
//
//   let hadYesAfterNo = false
//   let afterNoItems = []
//
//   for (let i = 1; i < areInGuessed.length; i++) { // [2, 1, 2, 1, 2, 1, 0, 1, 0, 1]
//     let currState = areInGuessed[i] // 2
//
//     if (currState === 0 || currState === 2) {
//       afterNoItems.push(i)
//     }
//
//     if (currState === 1 || areInGuessed.length - 1 === i) {
//       if (hadYesAfterNo) {
//         ans = ans.concat(afterNoItems)
//       }
//
//       hadYesAfterNo = false
//       afterNoItems = []
//     } else if (currState === 2) {
//       hadYesAfterNo = true
//     }
//   }
//
//   if (ans.length === 0) {
//     ans = areInGuessed.reduce(
//       (prev, curr, index) => {
//         if (curr !== 1) {
//           prev.push(index)
//         }
//
//         return prev
//       },
//       []
//     ).slice(1)
//   }
//
//   return ans.join(' ')
// }
//
// function parseInput(inputLines) {
//   let maxNum = parseInt(inputLines[0])
//   let questions = []
//
//   for (let i = 1; i < inputLines.length - 1; i += 2) {
//     let numbers = inputLines[i].trim().split(' ').map(num => parseInt(num))
//
//     questions.push([inputLines[i + 1], ...numbers])
//   }
//
//   return [maxNum, questions]
// }
//
// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// let input = fileContent.trim().split('\n').map(str => str.trim())
// input = parseInput(input)
//
// const result = numberGuess(...input)
//
// fs.writeFileSync("output.txt", result.toString())