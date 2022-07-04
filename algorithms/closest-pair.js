function closestPair(arr, X) {
  let leftIndex = 0
  let rightIndex = arr.length - 1
  let closestIndexes = [leftIndex, rightIndex]
  let closestSum = arr[leftIndex] + arr[rightIndex]
  let currentSum

  while(leftIndex < rightIndex) {
    currentSum = arr[leftIndex] + arr[rightIndex] - X
    if (Math.abs(currentSum) < closestSum) {
      closestSum = Math.abs(currentSum)
      closestIndexes = [leftIndex, rightIndex]
    }
    if (currentSum < 0) {
      leftIndex += 1
    } else {
      rightIndex -= 1
    }
  }

  return closestIndexes
}

console.log(closestPair([1, 1, 2, 2], 3))
console.log(closestPair([1, 2, 3, 5], 7))
console.log(closestPair([1, 1, 1, 1], 4))
