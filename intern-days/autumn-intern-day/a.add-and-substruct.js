const fs = require('fs')

function splitExpression(expressionStr) {
  return expressionStr.split(/(?=[+-])|(?<=[+-])/)
}

function calculate(expressionArr) {
  if (expressionArr.length === 0) return 0
  if (expressionArr.length === 1) return Number(expressionArr)

  let lastOperator = '+'
  return expressionArr.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      curr = parseInt(curr)

      if (lastOperator === '+') return acc + curr
      return acc - curr
    } else {
      lastOperator = curr
    }

    return acc
  }, 0)
}

(function run() {
  const fileContent = fs.readFileSync('input.txt', 'utf8');

  const input = fileContent.trim()
  console.log(input)
  const splitExpressionRes = splitExpression(input)
  console.log(splitExpressionRes)
  const result = calculate(splitExpressionRes)

  fs.writeFileSync('output.txt', result.toString())
})()