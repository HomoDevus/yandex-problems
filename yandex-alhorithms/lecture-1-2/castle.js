/**
 * @param d {number} - Width of the hole in the wall
 * @param e {number} - Height of the hole in the wall
 * @param a {number} - Length of the brick
 * @param b {number} - Height of the brick
 * @param c {number} - Width of the brick
 * Thoughts: First we need to find ways we can turn the brick
 *
 * Solution: First we find what is smaller d or e. Smaller value will be height and bigger width
 * Then we find smallest and second smallest for a brick, third value doesn't matter to us.
 * After that we trying to push the brick. Comparing smallest brick value with height and biggest with width.
 *
 * @return {boolean}
 */
function castleSolution(d, e, a, b, c) {
  let holeHeight = Math.min(d, e)
  let holeWidth = Math.max(d, e)
  let [brickHeight, brickWidth] = [a, b, c].sort((num1, num2) => num1 - num2)

  return holeHeight > brickHeight && holeWidth > brickWidth;
}

console.log(castleSolution(3, 2, 2, 1, 3))