/**
 * @param N - Kilograms of metal liquid
 * @param K - Kilograms of every prep
 * @param M - Kilograms of every detail made from prep
 * @return {number} - Amount of possible details
 */
function getDetailAmount(N, K, M) {
  if (N < K || K < M) {
    return 0
  }
  let detailsPerPrep = Math.floor(K / M)
  let leftover = K % M
  let details = 0

  while (N >= K) {
    N = N - K + leftover
    details += detailsPerPrep
  }

  return details
}


function test() {
  for (let N = 1; N <= 200; N++) {
    for (let K = 1; K <= N; K++) {
      for (let M = 1; M <= K; M++) {
        let t0 = performance.now();
        console.log(N, K, M)
        getDetailAmount(N, K, M)

        let t1 = performance.now();
        if (t1 - t0 > 1000) {
          console.log('Took more than a second')
          return
        }
      }
    }
  }
}

test()

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().split(' ').map(item => parseInt(item))

const result = getDetailAmount(...data)

fs.writeFileSync("output.txt", result.toString())