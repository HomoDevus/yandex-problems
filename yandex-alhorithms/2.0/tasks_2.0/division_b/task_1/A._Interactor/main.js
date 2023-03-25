function solution(code, interactor, checker) {
  code = parseInt(code)
  interactor = parseInt(interactor)
  checker = parseInt(checker)

  if (interactor === 0) {
    if (code !== 0) {
      return 3
    } else {
      return checker
    }
  } else if (interactor === 1) {
    return checker
  } else if (interactor === 4) {
    if (code !== 0) {
      return 3
    } else {
      return 4
    }
  } else if (interactor === 6) {
    return 0
  } else if (interactor === 7) {
    return 1
  } else {
    return interactor
  }
}

const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

const params = fileContent.toString().split('\n')

const result = solution(...params)

fs.writeFileSync("output.txt", result.toString())