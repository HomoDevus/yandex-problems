function nearestLowerOnRight(numbers) {
  const response = Array(numbers.length).fill(0)
  const stack = []
  let index = 0

  for (const number of numbers) {
    while (stack.length && stack.at(-1)[1] > number) {
      response[stack.at(-1)[0]] = index
      stack.pop()
    }

    stack.push([index, number])

    index++
  }

  return response.map(num => !num ? index : num)
}

console.log(nearestLowerOnRight([7,  2, 4, 5, 3, 2, 5, 1, 5, 4]))