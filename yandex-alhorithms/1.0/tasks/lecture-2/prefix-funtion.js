function getPrefixes(arr) {
  let prefixes = [0]

   for (let i = 0; i < arr.length; i++) {
     let prefixCount = 0
     for (let i1 = 0; i1 < i; i1++) {
       if (arr[i1] === arr[i + i1]) {
         prefixCount += 1

         if (i - i1 === 1) {
           prefixes.push(prefixCount)
         }
       } else {
         prefixes.push(prefixCount)
         break
       }
     }
   }

   return prefixes
}

console.log(getPrefixes([1, 2, 3, 4, 5, 4, 3, 2, 1]))
console.log(getPrefixes([1, 2, 1, 2, 2]))
console.log(getPrefixes([1, 2, 1, 3, 1, 2, 1, 4, 1, 2, 1, 3, 1, 2, 1]))