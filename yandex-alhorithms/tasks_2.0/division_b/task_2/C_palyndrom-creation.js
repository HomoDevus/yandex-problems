function getTransformationPrice(str) {
  if (str.length < 2) return 0

  let leftIndex = 0
  let rightIndex = str.length - 1
  let price = 0

  while (leftIndex < rightIndex) {
    if (str[leftIndex] !== str[rightIndex]) {
      price += 1
    }

    leftIndex += 1
    rightIndex -= 1
  }

  return price
}

process.stdin.on('data', data => {
  let input = data.toString().split('\r')[0]
  let res = getTransformationPrice(input);
  process.stdout.write(res + '');
  process.exit();
});