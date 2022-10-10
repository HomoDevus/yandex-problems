function placeLaptops(widthA, heightA, widthB, heightB) {
  let minOption = [widthA + widthB, Math.max(heightA, heightB)]

  function checkOption(optionA, optionB) {
    let res = optionA * optionB

    console.log(optionA, optionB, res)

    if (res < minOption[0] * minOption[1]) {
      minOption = [optionA, optionB]
    }
  }

  checkOption(widthA + heightB, Math.max(widthB, heightA))
  // checkOption(Math.max(widthB, heightA), widthA + heightB)
  checkOption(heightA + heightB, Math.max(widthA, widthB))
  // checkOption(Math.max(widthA, widthB), heightA + heightB)
  checkOption(heightA + widthB, Math.max(widthA, heightB))

  return minOption.join(' ')
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().split(' ').map(item => parseInt(item))

const result = placeLaptops(...data)

fs.writeFileSync("output.txt", result.toString())