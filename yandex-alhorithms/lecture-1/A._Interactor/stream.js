const fs = require('fs')
let solution = require('./main.js')

let fileContent = fs.readFileSync("input.txt", "utf8");

const params = fileContent.toString().split('\n')

const result = solution(...params)

fs.writeFileSync("output.txt", result.toString())