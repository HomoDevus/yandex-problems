function getPossibleDestinations(steps, currPos) {
  let moveMap = [
    [-1, 0]
  ]
  let possibleDes = []

  for (let currStep = 1; currStep < steps + 1; currStep++) {
    let currDes = []
    for (let i = 1; i < currStep * 4; i++) {
      currDes.push(i % currStep)
    }
    possibleDes.push(currDes)
    currDes = []
  }

  console.log(possibleDes)
}

getPossibleDestinations(3, [0, 0])