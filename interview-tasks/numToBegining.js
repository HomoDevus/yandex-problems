// function zerosToEnd(arr) { // 0
//   let firstZero = 0
//
//   while(arr[firstZero] !== 0 && firstZero < arr.length) {
//     firstZero++
//   }
//
//   if (firstZero === arr.length && arr[firstZero] !== 0) {
//     return arr
//   }
//
//   let firstIndex = firstZero
//   let secondIndex = firstZero
//
//
//   while(secondIndex < arr.length) {
//     if (arr[firstIndex] !== 0) {
//       firstIndex++
//     } else if (arr[secondIndex] === 0) {
//       secondIndex++
//     } else {
//       arr[firstIndex] = arr[secondIndex]
//       arr[secondIndex] = 0
//       firstIndex++
//       secondIndex++
//     }
//   }
//
//   return arr
// }

function zerosToEnd(arr) {
  let nonZeroCount = 0

  for (let i = 0; i < arr.length; i++) {
    let arrItem = arr[i]

    if (arrItem !== 0) {
      arr[nonZeroCount] = arrItem
      nonZeroCount++
    }
  }

  for (let i = nonZeroCount; i < arr.length; i++) {
    arr[i] = 0
  }

  return arr
}

console.log(zerosToEnd([1, 0, 3, 4,]))