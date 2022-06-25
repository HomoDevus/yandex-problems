module.exports = function(n, width, height) {
  let videos = []
  // Получаем количество рядов и столбцов
  const ColumnsAmount = Math.ceil(Math.sqrt(n))
  const RowsAmount = Math.round(Math.sqrt(n))
  // Количество элементов в первой строке
  let itemsInFirstRow = ColumnsAmount - (ColumnsAmount * RowsAmount - n)
  // Подсчитываем ширину и высоту элементов
  let videoWidth = Math.round(width / ColumnsAmount)
  let videoHeight = Math.round(height / ColumnsAmount)
  if (videoHeight > height) {
    videoHeight = Math.round(height / RowsAmount)
    videoWidth = Math.round(width / RowsAmount)
  }

  // Получаем границы для видео элементов
  // Math.abs используется для фикса бага который возвращает -0
  const XStart = Math.abs(Math.round((width - videoWidth * ColumnsAmount) / 2))
  const YStart = Math.abs(Math.round((height - videoHeight * RowsAmount) / 2))

  // Получаем x первого элемента в первом ряду
  let firstItemX
  if (itemsInFirstRow < ColumnsAmount) {
    firstItemX = Math.round((width - videoWidth * itemsInFirstRow) / 2)
  } else {
    firstItemX = XStart
  }
  // Получаем y первого элемента в первом ряду
  let firstItemY = YStart

  let currentX = firstItemX
  let currentY = firstItemY
  let itemInColumn = 0
  for (let i = 0; i < n; i++) {
    // Если это первый элемент, ничего не меняем
    if (i) {
      // Обрабатываем элементы первой строки отдельно, так как их кол-во может быть меньше чем кол-во колонок
      if (i < itemsInFirstRow) {
        currentX += videoWidth
      } else if (!itemInColumn) { // Если это первый элемент в колонке, приводим x в исходно состояние и прибавляем высоту
        currentY += videoHeight
        currentX = XStart
        itemInColumn = (itemInColumn + 1) % ColumnsAmount
      } else if (itemInColumn < ColumnsAmount) { // Если не первый элемент в колонке, прибавляем ширину
        currentX += videoWidth
        itemInColumn = (itemInColumn + 1) % ColumnsAmount
      }
    }
    videos.push({ width: videoWidth, height: videoHeight, x: currentX, y: currentY })
  }

  return videos
}

placeScreens(5, 100, 100)
placeScreens(1, 100, 100)
// placeScreens(2, 400, 200)
// placeScreens(3, 500, 500)
// placeScreens(4, 500, 500)
// placeScreens(5, 500, 500)
placeScreens(6, 500, 500)
// placeScreens(7, 500, 500)
// placeScreens(8, 500, 500)
placeScreens(9, 500, 500)