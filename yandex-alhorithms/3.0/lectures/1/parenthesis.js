function isCorrectParenthesesSequence(parenthesesSequence, parenthesesType) {
  const stack = []

  for (let parenthesis of parenthesesSequence) {
    if (parenthesis in parenthesesType) {
      stack.push(parenthesis)
    } else {
      let topStackItem = stack.pop()

      if (parenthesesType[topStackItem] !== parenthesis) {
        return false
      }
    }
  }

  return stack.length === 0
}

console.log(isCorrectParenthesesSequence('()', {'(': ')'}))
console.log(isCorrectParenthesesSequence('(())', {'(': ')'}))
console.log(isCorrectParenthesesSequence('()(()())', {'(': ')'}))

console.log(isCorrectParenthesesSequence('(()', {'(': ')'}))
console.log(isCorrectParenthesesSequence(')(', {'(': ')'}))
console.log(isCorrectParenthesesSequence('())(', {'(': ')'}))

console.log(isCorrectParenthesesSequence('[]', {'(': ')', '[': ']', '{': '}'}))
console.log(isCorrectParenthesesSequence('{[]()}', {'(': ')', '[': ']', '{': '}'}))
console.log(isCorrectParenthesesSequence('{}[]()', {'(': ')', '[': ']', '{': '}'}))

console.log(isCorrectParenthesesSequence('[}', {'(': ')', '[': ']', '{': '}'}))
console.log(isCorrectParenthesesSequence('{(})', {'(': ')', '[': ']', '{': '}'}))
console.log(isCorrectParenthesesSequence('{[])})', {'(': ')', '[': ']', '{': '}'}))