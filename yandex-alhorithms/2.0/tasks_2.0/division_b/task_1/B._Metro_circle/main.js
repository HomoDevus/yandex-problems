function stationsCount(stations, enter, exit) {
  if (enter === exit) return 0
  let leftPath = Math.abs(enter - exit) - 1
  let rightPath = stations - Math.max(enter, exit) + Math.min(enter, exit) - 1

  return Math.min(leftPath, rightPath)
}

process.stdin.on('data', data => {
  let input = data.toString().split(' ').map(item => parseInt(item))
  let res = stationsCount(...input);
  process.stdout.write(res + '');
  process.exit();
});