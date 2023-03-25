function countVotes(votes) {
  let votesByName = votes.reduce(
    (prev, [candidate, votes]) => {
      if (!prev[candidate]) {
        prev[candidate] = 0
      }

      prev[candidate] += Number(votes)
      return prev
    },
    {})
  let res = []

  for (let [candidate, votes] of Object.entries(votesByName)) {
    res.push(candidate + ' ' + votes)
  }

  return res.join('\n')
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let input = fileContent.trim().split('\n').map(str => str.trim().split(' '))

const result = countVotes(input)

fs.writeFileSync('output.txt', result.toString())