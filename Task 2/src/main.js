// Не забудьте перед отправкой изменить в module.exports = function main(game, start) {
// Не деструктурируйте game, ваше решение не будет проходить тесты.
export default function main(game, start) {
  function positionToString(x, y) {
    return x.toString() + y.toString()
  }

  function getDirection(state) {
    let chosen = ['0', Infinity, '']

    let bottomStep = positionToString(currentCell.x, currentCell.y + 1)
    if (
      state.bottom
      && (visited[bottomStep] | 0) < chosen[1]
    ) {
      chosen = [bottomStep, visited[bottomStep] | 0, 'bottom']
    }

    let rightStep = positionToString(currentCell.x + 1, currentCell.y)
    if (
      state.right
      && (visited[rightStep] | 0) < chosen[1]
    ) {
      chosen = [rightStep, visited[rightStep] | 0, 'right']
    }

    let leftStep = positionToString(currentCell.x - 1, currentCell.y)
    if (
      currentCell.x > 0
      && state.left
      && (visited[leftStep] | 0) < chosen[1]
    ) {
      chosen = [leftStep, visited[leftStep] | 0, 'left']
    }

    let topStep = positionToString(currentCell.x, currentCell.y - 1)
    if (
      currentCell.y > 0
      && state.top
      && (visited[topStep] | 0) < chosen[1]
    ) {
      chosen = [topStep, visited[topStep] | 0, 'top']
    }

    visited[chosen[0]] = chosen[1] + 1
    return chosen
  }

  let makeStep = {
    bottom: () => {
      currentCell = { x: currentCell.x, y: currentCell.y + 1 }
      return () => game.bottom(currentCell.x, currentCell.y)
    },

    right: () => {
      currentCell = { x: currentCell.x + 1, y: currentCell.y }
      return () => game.right(currentCell.x, currentCell.y)
    },

    left: () => {
      currentCell = { x: currentCell.x - 1, y: currentCell.y }
      return () => game.left(currentCell.x, currentCell.y)
    },

    top: () => {
      currentCell = { x: currentCell.x, y: currentCell.y - 1 }
      return () => game.top(currentCell.x, currentCell.y)
    }

  }

  let visited = {}
  let currentCell = start
  let currentCellState

  visited[positionToString(start.x, start.y)] = visited[positionToString(start.x, start.y)] + 1 || 1

  function go(currentCell) {
    // do {
      let direction
    return game.state(currentCell.x, currentCell.y)
        .then(cell => {
          currentCellState = cell
          direction = getDirection(cell)
          return direction[2]
        })
        .then(direction => {
          console.log(makeStep[direction])
          return makeStep[direction]
        })
        .then(() => {
          console.log(currentCellState, currentCell, direction)
          debugger
          if (currentCellState.finish) return () => currentCell
          else {
            let [x, y] = direction[0].split('').map(num => parseInt(num))
            console.log(x, y)
            return () => go({x, y})
          }
        }).catch(e => console.error(e))
    // } while (!currentCellState.finish)

    // return currentCell
  }

  return go(currentCell).then((ms) => {
    console.log(ms)
    console.log(ms.x)
    // return ms
  })

  // return currentCell

  // return game.state(start.x, start.y)
  //   .then(() => game.right(start.x + 1, start.y))

  // return game.right(start.x, start.y)
  //   .then(() => game.right(start.x + 1, start.y))
  //   .then(() => game.right(start.x + 2, start.y))
  //   .then(() => {
  //     let state = game.state(start.x + 3, start.y)
  //     console.log(state)
  //     // return state
  //   })
  //   .then(() => game.right(start.x + 3, start.y))
  //   // .then(() => ({ x: start.x + 4, y: start.y }));
}
