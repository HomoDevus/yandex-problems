function getDiapasons(diapasons, arr) {
  let ans = []
  let sum = 0
  let quantity = 0
  let diapasonIndex = 0

  function pushDiapason() {
    ans.push({quantity, sum})
    quantity = 0
    sum = 0
    diapasonIndex++
  }

  for (let i = 0; i < arr.length; i++) {
    while (diapasonIndex < diapasons.length && arr[i] > diapasons[diapasonIndex]) {
      pushDiapason()
    }

    sum += arr[i]
    quantity += 1
  }

  for (let i = diapasonIndex; i <= diapasons.length; i++) {
    pushDiapason()
  }

  return ans
}



console.log(getDiapasons([4, 8], [1, 3, 4, 5, 8, 9]))
console.log(getDiapasons([5], [2, 4, 6, 8]))
console.log(getDiapasons([7], [1, 2]))
console.log(getDiapasons([0], [1, 2]))
console.log(getDiapasons([], []))
console.log(getDiapasons([], [1, 3, 4, 5, 8, 9]))
console.log(getDiapasons([0, 1, 2], [5, 6, 7]))
console.log(getDiapasons([10, 11, 15], [5, 6, 7]))
console.log(getDiapasons([0, 1, 2, 10, 11, 12], [5, 6, 7]))
console.log('==============================')

const splitToIntervals = (edges, arr) => {
  const intervals = []
  let curIdx = 0

  for (let i = 0; i <= edges.length; i++) {
    const interval = {quantity: 0, sum: 0}

    while (arr[curIdx] <= edges[i] || i > edges.length - 1 && curIdx < arr.length) {
      interval.quantity++
      interval.sum += arr[curIdx]
      curIdx++
    }

    intervals.push(interval)
  }
  return intervals
}

console.log(splitToIntervals([4, 8], [1, 3, 4, 5, 8, 9]))
console.log(splitToIntervals([5], [2, 4, 6, 8]))
console.log(splitToIntervals([7], [1, 2]))
console.log(splitToIntervals([0], [1, 2]))
console.log(splitToIntervals([], []))
console.log(splitToIntervals([], [1, 3, 4, 5, 8, 9]))
console.log(splitToIntervals([0, 1, 2], [5, 6, 7]))
console.log(splitToIntervals([10, 11, 15], [5, 6, 7]))
console.log(splitToIntervals([0, 1, 2, 10, 11, 12], [5, 6, 7]))