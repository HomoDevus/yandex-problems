function repeatedNumbers(numbers) {
  let prevNumbers = new Set()
  const Response = []

  for (let num of numbers) {
    if (prevNumbers.has(num)) {
      Response.push('YES')
    } else {
      Response.push('NO')
      prevNumbers.add(num)
    }
  }

  return Response.join('\n')
}