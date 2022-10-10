/**
 * Trains stay 1 min
 * @param a {number} - Minutes between trains on first platform.
 * @param b {number} - Minutes between trains on second platform.
 * @param n {number} - Counted trains on first platform.
 * @param m {number} - Counted trains on second platform.
 * Task: Find min and max time Tanya spent on train stations or say that she is counted incorrectly (in case if
 * solution is not possible)
 * Thoughts: Time she waited for first tran to arrive can be anything <= min(a, b) && > 0
 * First we find platform with least time and most time
 * To count max time for first platform leastMin * leastCount
 * Min time for first platform leastMin * leastCount - leastCount
 * Max time for second platform mostMin * mostCount
 * Min time for second platform mostMin * mostCount - leastCount
 * To confirm that solution is possible firstMin - secondMin - min(a, b) < 0
 * a = 2
 * b = 2
 * n = 6
 * m = 5
 */
function trains(a, b, n, m) {
  let maxFirstPlatform = a * (n + 1) + n
  let maxSecondPlatform = b * (m + 1) + m
  let minFirstPlatform = maxFirstPlatform - a * 2
  let minSecondPlatform = maxSecondPlatform - b * 2

  let minArriveTime = Math.max(minFirstPlatform, minSecondPlatform) // 7 16 5
  let maxArriveTime = Math.min(maxFirstPlatform, maxSecondPlatform) // 3 17 7

  if (minArriveTime > maxArriveTime) {
    return -1
  } else {
    return minArriveTime + ' ' + maxArriveTime
  }
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().split('\n').map(item => parseInt(item))

const result = trains(...data)

fs.writeFileSync("output.txt", result.toString())

console.log(trains(2, 2, 6, 5))
console.log(trains(1, 3, 3, 2))
console.log(trains(1, 5, 1, 2))