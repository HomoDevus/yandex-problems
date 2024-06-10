function expectedAbsoluteDifference(M, n) {
  let totalSum = 0;

  for (let x = 1; x <= M; x++) {
    for (let y = 1; y <= M; y++) {
      if (Math.abs(x - y) <= n) {
        totalSum += Math.abs(x - y);
      }
    }
  }

  return totalSum / (M * M);
}

const M = 10; // The range of X and Y is from 1 to 6.
const n = 1; // The maximum allowed difference.

const expectedValue = expectedAbsoluteDifference(M, n);
console.log(`Expected Value: ${expectedValue}`);