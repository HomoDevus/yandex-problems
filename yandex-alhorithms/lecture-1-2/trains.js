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
function trans(a, b, n, m) {
  let shortPlatformWaiting, longPlatformWaiting, shortPlatformNum, longPlatformNum
  if (a > b) {
    shortPlatformWaiting = b
    longPlatformWaiting = a
    shortPlatformNum = m
    longPlatformNum = n
  } else {
    shortPlatformWaiting = a // 2
    longPlatformWaiting = b // 4
    shortPlatformNum = n // 6
    longPlatformNum = m // 3
  }
  let maxFirstTrainWaiting = shortPlatformWaiting // 2
  let shortPlatformTime = shortPlatformNum * shortPlatformWaiting + shortPlatformNum // 6 * 2 = 13
  let longPlatformTime = longPlatformNum * longPlatformWaiting + longPlatformNum // 3 * 4 = 13

  if (longPlatformTime - shortPlatformTime > maxFirstTrainWaiting) { // 12 - 12 = 0 > 2 = false
    return 'INCORRECT'
  } else {
    let minTime = Math.min(shortPlatformTime, longPlatformTime) // 13
    let maxTime = Math.max(shortPlatformTime, longPlatformTime) // 13
    return `Min time: ${minTime} \nMax time: ${maxTime + maxFirstTrainWaiting}` // 13 15
  }
}

console.log(trans(2, 4, 5, 4))