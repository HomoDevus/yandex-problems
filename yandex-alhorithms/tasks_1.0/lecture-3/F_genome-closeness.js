function createSet(string) {
  let set = {}
  for (let i = 0; i < string.length - 1; i++) {
    if (!set[string[i]]) {
      set[string[i]] = {}
    }

    if (!set[string[i]][string[i + 1]]) {
      set[string[i]][string[i + 1]] = 0
    }

    set[string[i]][string[i + 1]] += 1
  }

  return set
}

function getGenomeCloseness(genomeA, genomeB) {
  let genomeASet = createSet(genomeA)
  let genomeBSet = createSet(genomeB)
  let counter = 0

  for (let key1 in genomeASet) {
    if (genomeBSet[key1]) {
      for (let key2 in genomeASet[key1]) {
        if (genomeBSet[key1][key2])
        counter += genomeASet[key1][key2] || 0
      }
    }
  }

  return counter
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let [firstLine, secondLine] = fileContent.toString().split('\n').map(item => item.replace(/\r?\n|\r/g, ""))

const result = getGenomeCloseness(firstLine, secondLine)

fs.writeFileSync('output.txt', result.toString())