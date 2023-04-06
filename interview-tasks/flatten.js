// function flatten(arr) {
//   const queue = [arr]
//   const result = []
//
//   while(queue.length) {
//     let currItem = queue.pop()
//
//     if (Array.isArray(currItem)) {
//       for (let i = currItem.length - 1; i >= 0; i--) {
//         queue.push(currItem[i])
//       }
//     } eldise {
//       result.push(currItem)
//     }
//   }
//
//   return result
// }

const flatten = (arr) => {
  const flat = (arr) => arr.reduce((res, el) => res.concat(el), [])

  let result = flat(arr)

  while (result.some(Array.isArray)) {
    result = flat(result)
  }

  return result
}

// RECURSION

function flattenParent(arr) {
  const result = []
  flatten(arr, result)
  return result
}

function flatten(arr, output) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]

    if (Array.isArray(item)) {
      arr[i] = flatten(item, output)
    } else {
      output.push(item)
    }
  }

  return arr
}

console.log(flatten([0, 0, 0, 0, [1, 2, [9, 9, 9], 3], 3]))