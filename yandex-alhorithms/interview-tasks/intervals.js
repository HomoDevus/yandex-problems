function intervals(arr) { // 1 2 3 4 6 7 8
  let intervalsArr = []
  let intervalStart = 0
  let intervalEnd = 1
  let range = 0
  arr = arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) { // 5
    if (arr[intervalStart + range] + 1 === arr[intervalEnd] && arr.length - 1 !== i) { // 6 + 1 === 6
      intervalEnd++ // 5
      range++ // 0
    } else if (range === 0) {
      intervalsArr.push(arr[intervalStart].toString())
      intervalStart++
      intervalEnd++
    } else {
      intervalsArr.push(`${arr[intervalStart]}-${arr[intervalEnd - 1]}`) // 1-4
      intervalStart = intervalEnd // 4
      intervalEnd += 1 // 5
      range = 0
    }
  }

  return intervalsArr
}

console.log(intervals([1, 3, 4, 6, 7, 8, 10, 12, 13, 14]))