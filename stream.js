function findJewels(jewelery, stones) {
  let found = 0
  for (let stone of stones) {
    if (jewelery.includes(stone)) {
      found += 1
    }
  }
  return found
};

process.stdin.on('data', data => {
  let input = data.toString()
  let res = findJewels(input);
  process.stdout.write(res + '');
  process.exit();
});