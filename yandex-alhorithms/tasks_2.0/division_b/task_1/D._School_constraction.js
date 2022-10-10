function getSchoolPlace(students, homes) {
  return homes[Math.round(students / 2) - 1]
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [students, homes] = fileContent.split('\n')
students = parseInt(students)
homes = homes.split(' ').map(item => parseInt(item))

const result = getSchoolPlace(students, homes)

fs.writeFileSync('output.txt', result.toString())