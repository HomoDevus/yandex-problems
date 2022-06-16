var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Не забудьте перед отправкой изменить в module.exports = function main(game, start) {
// Не деструктурируйте game, ваше решение не будет проходить тесты.
export default function main(game, start) {
    function positionToString(x, y) {
        return x.toString() + '/' + y.toString();
    }
    let test = () => __awaiter(this, void 0, void 0, function* () {
        function getDirection(state) {
            let chosen = ['0', Infinity, ''];
            let bottomStep = positionToString(currentCell.x, currentCell.y + 1);
            if (state.bottom
                && (visited[bottomStep] | 0) < chosen[1]) {
                chosen = [bottomStep, visited[bottomStep] | 0, 'bottom'];
            }
            let rightStep = positionToString(currentCell.x + 1, currentCell.y);
            if (state.right
                && (visited[rightStep] | 0) < chosen[1]) {
                chosen = [rightStep, visited[rightStep] | 0, 'right'];
            }
            let leftStep = positionToString(currentCell.x - 1, currentCell.y);
            if (currentCell.x > 0
                && state.left
                && (visited[leftStep] | 0) < chosen[1]) {
                chosen = [leftStep, visited[leftStep] | 0, 'left'];
            }
            let topStep = positionToString(currentCell.x, currentCell.y - 1);
            if (currentCell.y > 0
                && state.top
                && (visited[topStep] | 0) < chosen[1]) {
                chosen = [topStep, visited[topStep] | 0, 'top'];
            }
            visited[chosen[0]] = chosen[1] + 1;
            return chosen[2];
        }
        let visited = {};
        let currentCell = start;
        let direction;
        visited[positionToString(start.x, start.y)] = visited[positionToString(start.x, start.y)] + 1 || 1;
        while (true) {
            try {
                let cell = yield game.state(currentCell.x, currentCell.y);
                if (cell.finish)
                    return currentCell;
                direction = getDirection(cell);
                if (direction === 'bottom') {
                    yield game.down(currentCell.x, currentCell.y);
                    currentCell = { x: currentCell.x, y: currentCell.y + 1 };
                }
                else if (direction === 'left') {
                    yield game.left(currentCell.x, currentCell.y);
                    currentCell = { x: currentCell.x - 1, y: currentCell.y };
                }
                else if (direction === 'right') {
                    yield game.right(currentCell.x, currentCell.y);
                    currentCell = { x: currentCell.x + 1, y: currentCell.y };
                }
                else if (direction === 'top') {
                    yield game.up(currentCell.x, currentCell.y);
                    currentCell = { x: currentCell.x, y: currentCell.y - 1 };
                }
            }
            catch (e) {
                console.error(e);
            }
        }
    });
    return test();
}
