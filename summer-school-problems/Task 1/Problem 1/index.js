/**
 * @param {HTMLElement} rootNode Элемент в котором находятся объявления
 * @param {number} columnCount Количество колонок
 * @param {number} elementGap Расстояние между колонками, а также элементами по-вертикали
 */
function renderWaterfall(rootNode, columnCount, elementGap) {
  let nodeWidth = (rootNode.offsetWidth - elementGap * (columnCount - 1)) / columnCount
  const NodeChildren = rootNode.children
  const ArticlesAmount = rootNode.getElementsByClassName('el').length
  // Получает последовательность от 0 до columnCount
  let columnHeights = [...Array(columnCount).keys()]

  rootNode.style.columns = `${columnCount}`
  rootNode.style.gap = `${elementGap}px`

  // Распределяет элементы по колонкам
  for (let i = 0; i < ArticlesAmount; i++) {
    let minValue = columnHeights.reduce((a, b) => Math.min(a, b))
    let lowestColumnIndex = columnHeights.indexOf(minValue)
    NodeChildren[0].style.width = `${nodeWidth}px`
    let columnToAppend = i - i % columnCount + lowestColumnIndex
    rootNode.insertBefore(NodeChildren[i], NodeChildren[columnToAppend])
    console.log(columnToAppend)
    columnHeights[lowestColumnIndex] += NodeChildren[0].offsetHeight
  }
}

function start() {
  const ROOT_ELEMENT = document.getElementsByClassName('root')[0]
  ROOT_ELEMENT.style.width = '500px'
  renderWaterfall(ROOT_ELEMENT, 3, 10)
}