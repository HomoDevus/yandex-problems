function getBrokenKeys(keysAmount, keysDurability, keysClick) {
  let ans = []

  for (let click of keysClick) {
    keysDurability[click - 1] -= 1
  }

  for (let key of keysDurability) {
    ans.push(key >= 0 ? 'NO' : 'YES')
  }

  return ans.join('\n')
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [fl, sl, tl, fol] = fileContent.toString().split('\n')
fl = parseInt(fl)
sl = sl.split(' ').map(item => parseInt(item))
fol = fol.split(' ').map(item => parseInt(item))

const result = getBrokenKeys(fl, sl, fol)

fs.writeFileSync('output.txt', result.toString())