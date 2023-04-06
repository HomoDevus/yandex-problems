module.exports = function (numbers) {
  const bytes = numbersToBytes(numbers)
  const bufferArray = new Uint16Array(bytes)
  const decoder = new TextDecoder()

  return decoder.decode(bufferArray)
};

// Convert input numbers to utf-8 bytes
function numbersToBytes(numbers) {
  const bytes = []

  for (let number of numbers) {
    // Decimal
    if (number < 10 && number > -1) {
      bytes.push(number + 48)
    } else if (number > 9 && number < 35) { // Uppercase char
      bytes.push(number + 55)
    } else if (number > 35 && number < 61) { // Lowercase char
      bytes.push(number + 61)
    } else if (number === 62) { // Space bar
      bytes.push(32)
    } else { // Unknown symbol replace with: _
      bytes.push(95)
    }
  }

  return bytes
}
