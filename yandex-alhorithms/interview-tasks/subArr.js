function findSubSequence(arr) {
  let maxSequence = 0
  let maxSequenceBorders
  let lastLeftBorder = 0
  let countSequence = 0

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] >= arr[i]) {
      countSequence++
    } else {
      if (countSequence > maxSequence) {
        maxSequence = countSequence
        maxSequenceBorders = [lastLeftBorder, i]
      }

      lastLeftBorder = i + 1
      countSequence = 0
    }
  }

  if (countSequence > maxSequence) {
    maxSequence = countSequence
    maxSequenceBorders = [lastLeftBorder, arr.length - 1]
  }

  return maxSequenceBorders
}

console.log(findSubSequence([1, 2, 3, 3, 2, 5, 5, 56, 8, 9, 10, 11, 12]))