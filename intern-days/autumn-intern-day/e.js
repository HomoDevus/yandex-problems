const fs = require('fs')

function countMaxBooksOnShelf(booksInBox) {
  let leftBook = -Infinity
  let rightBook = Infinity
  let booksOnShelf = 0

  for (let i = 0; i < booksInBox.length; i++) {
    const bookHeight = booksInBox[i]

    let leftEffect = 0
    let rightEffect = 0

    if (bookHeight < leftBook || bookHeight > rightBook) continue

    for (let j = i + 1; j < booksInBox.length; j++) {
      const expectedBookHeight = booksInBox[j]

      if (expectedBookHeight < leftBook || expectedBookHeight > rightBook) continue

      // Try to left
      if (bookHeight <= expectedBookHeight && expectedBookHeight >= bookHeight) leftEffect++
      else leftEffect--

      // Try to right
      if (bookHeight >= expectedBookHeight && expectedBookHeight <= bookHeight) rightEffect++
      else rightEffect--
    }

    if (leftEffect >= 0) {
      leftBook = bookHeight
      booksOnShelf++
    } else if (rightEffect > 0) {
      rightBook = bookHeight
      booksOnShelf++
    }
  }

  return booksOnShelf
}

(function run() {
  const fileContent = fs.readFileSync('input.txt', 'utf8');

  const input = fileContent.trim().split('\n')[1].split(' ').map(Number)
  const result = countMaxBooksOnShelf(input)

  fs.writeFileSync('output.txt', result.toString())
})()