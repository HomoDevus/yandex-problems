/**
 * @param {HTMLElement} rootNode Элемент в котором находятся объявления
 * @param {number} columnCount Количество колонок
 * @param {number} elementGap Расстояние между колонками, а также элементами по-вертикали
 */
function renderWaterfall(rootNode, columnCount, elementGap) {
  let nodeWidth = (rootNode.offsetWidth - elementGap * (columnCount - 1)) / columnCount
  let columns = []
  const NodeChildren = rootNode.children
  const ArticlesAmount = rootNode.children.length
  // Получает последовательность от 0 до columnCount
  let columnHeights = [...Array(columnCount).keys()]

  // Создаёт нужное количество колонок
  for (let i = 0; i < columnCount; i++) {
    let column = document.createElement('div')
    column.classList.add(`column-${i}`)
    column.style.width = `${nodeWidth}px`
    column.style.display = 'flex'
    column.style.flexDirection = 'column'
    column.style.gap = `${elementGap}px`
    rootNode.append(column)
    columns.push(column)
  }

  rootNode.style.display = 'flex'
  rootNode.style.gap = `${elementGap}px`

  // Распределяет элементы по колонкам
  for (let i = 0; i < ArticlesAmount; i++) {
    let minValue = columnHeights.reduce((a, b) => Math.min(a, b))
    let lowestColumnIndex = columnHeights.indexOf(minValue)
    NodeChildren[0].style.width = `${nodeWidth}px`
    let columnToAppend = columns[lowestColumnIndex]
    columnToAppend.append(NodeChildren[0])
    columnHeights[lowestColumnIndex] += NodeChildren[0].offsetHeight
  }
}

function start() {
  const ROOT_ELEMENT = document.getElementsByClassName('root')[0]
  ROOT_ELEMENT.style.width = '500px'
  renderWaterfall(ROOT_ELEMENT, 3, 10)
}