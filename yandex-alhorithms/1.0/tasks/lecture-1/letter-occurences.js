function countSameLetters(lettersString) {
  // If new letter add counter value to an answer array, clear the counter add letter to an answer array
  // if counter === 1 do not add it to answer
  // else add + 1 to counter
  // join answer
  let currentLetter = lettersString[0]
  let ans = [currentLetter]
  let letterAcurences = 1

  for (let letter of lettersString.slice(1)) {
    if (letter === currentLetter) {
      letterAcurences++
    } else {
      if (letterAcurences > 1) {
        ans.push(letterAcurences.toString())
      }
      ans.push(letter)
      currentLetter = letter
      letterAcurences = 1
    }
  }

  return ans.join('')
}

console.log(countSameLetters('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBB'))