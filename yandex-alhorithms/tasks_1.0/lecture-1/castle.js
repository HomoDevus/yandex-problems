/**
 * @param d {number} - Width of the hole in the wall
 * @param e {number} - Height of the hole in the wall
 * @param a {number} - Width of the brick
 * @param b {number} - Height of the brick
 * @param c {number} - Length of the brick
 * Thoughts: First we need to find ways we can turn the brick
 *
 * Solution: First we find what is smaller d or e. Smaller value will be height and bigger width
 * Then we find smallest and second smallest for a brick, third value doesn't matter to us.
 * After that we trying to push the brick. Comparing smallest brick value with height and biggest with width.
 *
 * @return {boolean}
 */
function castleSolution(a, b, c, d, e) {
  let [brickHeight, brickWidth] = [a, b, c].sort((num1, num2) => num1 - num2)
  let [holeHeight, holeWidth] = [d, e].sort((num1, num2) => num1 - num2)

  if (holeHeight >= brickHeight && holeWidth >= brickWidth) {
    return 'YES'
  } else {
    return 'NO'
  }
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().split('\n').map(item => parseInt(item))

const result = castleSolution(...data)

fs.writeFileSync("output.txt", result.toString())