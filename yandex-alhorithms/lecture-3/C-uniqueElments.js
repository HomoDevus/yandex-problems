function uniqueElements(elements) { // 4 3 5 2 5 1 3 5
  const countedElements = {}
  let unique = []

  for (let elem of elements) { // 1
    if (!countedElements[elem]) {
      countedElements[elem] = 0
    }

    countedElements[elem] += 1
  }

  for (let elem of elements) {
    if (countedElements[elem] === 1) {
      unique.push(elem)
    }
  }

  return unique.join(' ')
}

console.log(uniqueElements([4, 3, 5, 2, 5, 1, 3, 5]))