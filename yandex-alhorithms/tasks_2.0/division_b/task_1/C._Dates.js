function dates(a, b, year) {
  if ((a > 12 ^ b > 12) || a === b) return 1
  return 0
}

process.stdin.on('data', data => {
  let input = data.toString().split(' ').map(item => parseInt(item))
  let res = dates(...input);
  process.stdout.write(res + '');
  process.exit();
});