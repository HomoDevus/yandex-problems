function atm(amount) { // 10050
  const notes = [5000, 1000, 500, 100, 50, 10]
  let currNotes = []

  for (let note of notes) {
    let amountOfNotes = Math.floor(amount / note)

    if (amountOfNotes === 0) continue

    amount -= amountOfNotes * note

    currNotes.push(`${amountOfNotes}X${note}`)
  }

  return currNotes
}

console.log(atm(1530))