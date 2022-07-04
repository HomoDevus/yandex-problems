function maxUnique(str) {
  if (!str.length) return 0
  let maxString = 1
  let currString = 1
  let set = new Set([str[0]])

  for (let i = 1; i < str.length; i++) {
    if (set.has(str[i])) {
      set.clear()
      currString = 0
    }

    set.add(str[i])
    currString += 1
    if (currString > maxString) {
      maxString += 1
    }
  }

  return maxString
}

console.log(maxUnique('aabcdabcbbddeddafca'))
