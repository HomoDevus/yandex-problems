function checkPhoneNumbers(targetNum, comparisonNums) {
  let ans = ''
  targetNum = removeSymbols(targetNum)
  targetNum = getCodeAndFirstNum(targetNum)

  function removeSymbols(number) {
    return number.replace(/[^\d]/g, '')
  }

  function getCodeAndFirstNum(number) {
    if (number.length === 11 && number[0] === '7') {
      number = '8' + number.slice(1)
    }
    if (number.length === 7) {
      number = '8495' + number
    }

    return number
  }

  for (let compNum of comparisonNums) {
    compNum = removeSymbols(compNum)
    compNum = getCodeAndFirstNum(compNum)

    if (compNum === targetNum) {
      ans += 'YES\n'
    } else {
      ans += 'NO\n'
    }
  }

  return ans
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [firstLine, ...secondLine] = fileContent
  .toString().split('\n').filter(item => item.length).map(item => item.replace(/(\r\n|\n|\r)/gm, ""))

const result = checkPhoneNumbers(firstLine, secondLine)

fs.writeFileSync("output.txt", result.toString())