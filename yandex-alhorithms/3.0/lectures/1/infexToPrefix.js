const OPERATIONS = {
  '+': 0,
  '-': 0,
  '*': 1,
  '/': 1
}

function infexToPrefix(expression) {
  const prefixStack = []
  const remembered = []

  for (const symbol of expression) {
    if (Number.isInteger(Number(symbol))) {
      prefixStack.push(symbol)
    } else if (symbol in OPERATIONS) {
      while (remembered.length && OPERATIONS[remembered.at(-1)] >= OPERATIONS[symbol]) {
        prefixStack.push(remembered.pop())
      }

      remembered.push(symbol)
    } else { // is parenthesis
      if (symbol === '(') {
        remembered.push(symbol)
      } else if (symbol === ')') {
        while (remembered.at(-1) !== '(') {
          prefixStack.push(remembered.pop())
        }
        remembered.pop() // remove open bracket too
      }
    }
  }

  while (remembered.length) {
    prefixStack.push(remembered.pop())
  }

  return prefixStack
}

console.log(infexToPrefix('6+3*(1+4*5)*2'))