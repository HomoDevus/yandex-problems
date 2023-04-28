function overlapAmount(arr1, arr2) {
  let overlapAmount = 0
  const arr1Set = new Set(arr1)
  const arr2Set = new Set(arr2)

  for (let num of arr1Set) {
    if (arr2Set.has(num)) {
      overlapAmount++
    }
  }

  return overlapAmount
}
