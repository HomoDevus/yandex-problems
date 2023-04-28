const stringDecode = require('./1.stringDecode')
const decryption = require('./3.decryption')

// console.log(stringDecode([14,12,22,10,28,38,53,44,51,55,62,2,0,1,5]))

const str = "lg=lv_11_lg=vl";
const rules = {
  "l": "1",
  "v": "3",
  "_": "\n", // Перевод строки
  "=": " = ", // Символ присваивания
}
const tokensMap  = {
  "val": "lg",
}

console.log(decryption(str, tokensMap, rules))
