const fs = require('fs')
let solution = require('yandex-alhorithms/tasks_2.0/division_b/task_1/A._Interactor/main.js')

let fileContent = fs.readFileSync("input.txt", "utf8");

const params = fileContent.toString().split('\n')

const result = solution(...params)

fs.writeFileSync("output.txt", result.toString())