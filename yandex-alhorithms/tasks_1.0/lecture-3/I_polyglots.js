function getKnownLanguages(studentsNum, students) {
  let languagesDict = {}
  let languagesArr = []
  let knownByEveryone = []
  let languagesNum = 0

  for (let student of students) {
    for (let language of student) {
      if (!languagesDict[language]) {languagesDict[language] = 0}
      languagesDict[language] += 1
    }
  }

  for (let language in languagesDict) {
    languagesNum += 1
    if (languagesDict[language] === studentsNum) {
      knownByEveryone.push(language)
    }
    languagesArr.push(language)
  }

  return knownByEveryone.length
    + '\n' + knownByEveryone.join('\n')
    + '\n' + languagesArr.length
    + '\n' + languagesArr.join('\n')
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [firstLine, ...left] = fileContent.toString().split('\n').filter(item => item.length)
left = left.map(num => Number.isInteger(parseInt(num)) ? parseInt(num) : num.replace(/\r?\n|\r/g, ""))
let students = []
let student = []


for (let item of left) {
  if (Number.isInteger(item)) {
    if (student.length) {
      students.push(student)
    }
    student = []
  } else {
    student.push(item)
  }
}

if (student.length) {
  students.push(student)
}

const result = getKnownLanguages(students.length, students)

fs.writeFileSync('output.txt', result.toString())