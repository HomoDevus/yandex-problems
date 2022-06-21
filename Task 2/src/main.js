// Не забудьте перед отправкой изменить в module.exports = function main(game, start) {
// Не деструктурируйте game, ваше решение не будет проходить тесты.
export default function main(game, start) {
  function positionToString(x, y) {
    return x.toString() + '/' + y.toString()
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
    return chosen[2]
  }

  let visited = {}
  let currentCell = start
  let direction

  visited[positionToString(start.x, start.y)] = visited[positionToString(start.x, start.y)] + 1 || 1

  let bot = () => {
    let go = () => new Promise((resolve) => {
      game.state(currentCell.x, currentCell.y)
        .then((cell) => {
          if (cell.finish) {
            return currentCell
          }
          direction = getDirection(cell)
          if (direction === 'bottom') {
            currentCell = { x: currentCell.x, y: currentCell.y + 1 }
            return game.down(currentCell.x, currentCell.y - 1)
          } else if (direction === 'left') {
            currentCell = { x: currentCell.x - 1, y: currentCell.y }
            return game.left(currentCell.x + 1, currentCell.y)
          } else if (direction === 'right') {
            currentCell = { x: currentCell.x + 1, y: currentCell.y }
            return game.right(currentCell.x - 1, currentCell.y)
          } else if (direction === 'top') {
            currentCell = { x: currentCell.x, y: currentCell.y - 1 }
            return game.up(currentCell.x, currentCell.y + 1)
          }
        })
        .then((done) => {
          if (done) {
            resolve(done)
          } else {
            resolve(false)
          }
        })
    });

    (function loop(ans) {
      console.log(ans)
      if (ans) return ans; // all done
      go().then((res) => {
        loop(res);
      });
    })(false);
  };

  return bot()
}
