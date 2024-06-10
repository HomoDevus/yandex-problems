function placeScreens(n, width, height) {
  let videos = []
  const ColumnsAmount = Math.ceil(Math.sqrt(n))
  const RowsAmount = Math.round(Math.sqrt(n))
  let itemsInFirstRow = ColumnsAmount - (ColumnsAmount * RowsAmount - n)
  // Подсчитываем ширину и высоту элементов
  let videoWidth = Math.round(width / ColumnsAmount)
  let videoHeight = Math.round(height / ColumnsAmount)
  if (videoHeight > height) {
    videoHeight = Math.round(height / RowsAmount)
    videoWidth = Math.round(width / RowsAmount)
  }

  // Получаем x первого элемента в первом ряду если элементов в ряду меньше чем колонок
  let firstItemX
  if (itemsInFirstRow < ColumnsAmount) {
    firstItemX = Math.round((width - videoWidth * itemsInFirstRow) / 2)
  } else {
    firstItemX = Math.round((width - videoWidth * ColumnsAmount) / 2)
  }
  // Получаем y первого элемента в первом ряду если элементов в колонке меньше чем свободного места
  let firstItemY = Math.round((height - videoHeight * RowsAmount) / 2)

  let currentX = firstItemX
  let currentY = firstItemY
  let itemInColumn = 0
  for (let i = 0; i < n; i++) {
    if (itemsInFirstRow && !i) {
      itemsInFirstRow -= 1
      videos.push({width: videoWidth, height: videoHeight, x: currentX, y: currentY})
    } else if (itemsInFirstRow) {
      currentX += videoWidth
      itemsInFirstRow -= 1
      videos.push({width: videoWidth, height: videoHeight, x: currentX, y: currentY})
      if (!itemsInFirstRow) {
        currentY += videoHeight
        currentX = Math.round((width - videoWidth * ColumnsAmount) / 2)
      }
    } else {
      if (itemInColumn === ColumnsAmount) {
        itemInColumn = 0
        currentY += videoHeight
        currentX = Math.round((width - videoWidth * ColumnsAmount) / 2)
        videos.push({width: videoWidth, height: videoHeight, x: currentX, y: currentY})
      } else {
        if (itemInColumn) {
          currentX += videoWidth
        }
        itemInColumn += 1
        videos.push({width: videoWidth, height: videoHeight, x: currentX, y: currentY})
      }
    }
  }

  console.log(videos)
}

placeScreens(5, 100, 100)
placeScreens(1, 100, 100)