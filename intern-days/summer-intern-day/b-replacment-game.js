const fs = require('fs')

function isExpressionCorrect(strA, strB) {
    if (strA.length !== strB.length) return false

    let dict = {}
    let reversedDict = {}

    for (let i = 0; i < strA.length; i++) {
        let letterA = strA[i]
        let letterB = strB[i]

        if (!dict[letterA]) {
            dict[letterA] = letterB
        } else if (dict[letterA] !== letterB) {
            return false
        }

        if (!reversedDict[letterB]) {
            reversedDict[letterB] = letterA
        } else if (reversedDict[letterB] !== letterA) {
            return false
        }
    }

    return true
}

let fileContent = fs.readFileSync('input.txt', 'utf8');

let input = fileContent.trim().split('\n')

let result = []

for (let i = 1; i < Number(input[0]) * 2; i += 2) {
    if (isExpressionCorrect(input[i], input[i + 1])) {
        result.push("YES")
    } else {
        result.push("NO")
    }
}

fs.writeFileSync('output.txt', result.join("\n").toString())