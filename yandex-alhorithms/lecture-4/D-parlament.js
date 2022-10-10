function countParliamentSeats(parties) {
  let partiesDict = {}
  let allVotes = parties.reduce((prev, curr) => prev + curr[1], 0)
  const parliamentSeats = 450
  const votesPerSeat = allVotes / parliamentSeats
  let busySeats = 0
  let res = []

  for (let [partyName, votes] of parties) {
    let partySeats = Math.floor(votes / votesPerSeat)
    busySeats += partySeats
    partiesDict[partyName] = partySeats
  }

  if (busySeats < parliamentSeats) {
    let sortedParties = parties.reduce(
      (prev, [partyName, votes]) => {
        prev.push([(votes / votesPerSeat) % 1, votes, partyName])
        return prev
      },
        [])
    sortedParties.sort()

    while (busySeats < parliamentSeats) {
      let currParty = sortedParties.pop()
      console.log(currParty)
      partiesDict[currParty[2]] += 1

      busySeats++
    }
  }

  for (let [partyName] of parties) {
    res.push(`${partyName} ${partiesDict[partyName]}`)
  }

  return res.join('\n')
}

const fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8');

let input = fileContent.trim().split('\n').map(item => {
  item = item.split(' ')
  return [item.slice(0, -1).join(' ').trim(), parseInt(item[item.length - 1].trim())]
})

const result = countParliamentSeats(input)

fs.writeFileSync('output.txt', result.toString())

