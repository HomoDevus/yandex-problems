function longestDistanceToShop(plan) {
  let longest = -Infinity
  let shops = []

  for (let [index, building] of plan.entries()) {
    if (building === 2) {
      shops.push(index)
    }
  }

  for (let [index, building] of plan.entries()) {
    if (building === 1) {
      let closest = findClosestShop(index)
      if (closest > longest) {
        longest = closest
      }
    }
  }

  function findClosestShop(index) {
    let closest = Infinity

    for (let shop of shops) {
      let distance = Math.abs(index - shop)
      if (distance < closest) {
        closest = distance
      }
    }
    return closest
  }

  return longest
}



const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

let input = fileContent.split(' ').map(item => parseInt(item))

const result = longestDistanceToShop(input)

fs.writeFileSync("output.txt", result.toString())