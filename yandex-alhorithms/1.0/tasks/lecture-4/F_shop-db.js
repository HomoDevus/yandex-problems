function getUserPurchases(transactions) {
  let dict = {}
  let ans = ''

  for (let [user, item, amount] of transactions) {
    if (!dict[user]) {
      dict[user] = []
    }

    dict[user].push([item, amount])
  }

  for (let [user, value] of Object.entries(dict)) {
    ans += user + ':\n'

    for (let purchase of value) {
      ans += purchase.join(' ') + '\n'
    }
  }

  return ans
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [...data] = fileContent.toString().replace(/(\r)/gm, '').split('\n').filter(str => str.length).map(item => item.split(' '))

const result = getUserPurchases(data)

fs.writeFileSync('output.txt', result.toString())