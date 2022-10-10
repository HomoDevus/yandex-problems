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

console.log(flatten([0, 0, 0, 0, [1, 2, [9, 9, 9], 3], 3]))