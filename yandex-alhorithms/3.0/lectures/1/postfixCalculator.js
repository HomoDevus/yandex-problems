function calculate(operations) {
  const stack = []

  for (const operation of operations) {
    if (Number.isInteger(operation)) {
      stack.push(operation)
    } else {
      stack.push(calculateOperation(stack.pop(), stack.pop(), operation))
    }
  }

  if (stack.length !== 1) {
    throw Error('Incorrect expression format')
  }

  return stack[0]
}

function calculateOperation(firstOperand, secondOperand, operation) {
  switch (operation) {
    case '+':
      return secondOperand + firstOperand
    case '-':
      return secondOperand - firstOperand
    case '*':
      return secondOperand * firstOperand
    case '/':
      return secondOperand / firstOperand
    default:
      throw Error(`No such operand as ${operation}`)
  }
}

console.log(calculate([6, 3, 1, 4, 5, '*', '+', '*', 2, '*', '+']))