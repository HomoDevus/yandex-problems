const fs = require('fs')

function getSequences(arr) {
  let sequences = []
  let maxSeqLen = 0

  for (let i = 0; i < arr.length; i++) {
    const sequence = []
    let prev = -Infinity

    for (let j = i; j < arr.length; j++) {
      const num = arr[j]

      if (num >= prev) {
        prev = num
        sequence.push(num)
      }
    }

    if (sequence.length > maxSeqLen) {
      sequences = [sequence]
      maxSeqLen = sequence.length
    } else if (sequence.length === maxSeqLen) {
      sequences.push(sequence)
    }
  }

  const allSequences = []

  for (const sequence of sequences) {
    allSequences.push(...combinationsOfSequence(sequence))
  }

  return allSequences.sort((a, b) => b.length - a.length)
}

function combinationsOfSequence(arr) {
  function generateCombinations(index, currentCombination) {
    if (index === arr.length) {
      combinations.push(currentCombination);
      return;
    }

    // Include the current element in the combination
    generateCombinations(index + 1, currentCombination.concat(arr[index]));

    // Skip the current element in the combination
    generateCombinations(index + 1, currentCombination);
  }

  const combinations = [];
  generateCombinations(0, []);

  return combinations.filter(arr => arr.length !== 0);
}

function isSequenceCorrect(sequence, k, b) {
  for (let j = 0; j < k - 1; j++) {
    if (sequence[j + 1] > sequence[j] + b) return false
  }

  return true
}

(function run() {
  const fileContent = fs.readFileSync('input.txt', 'utf8');

  let [[len, b], arr] = fileContent.trim().split('\n').map(line => line.split(' ').map(Number))
  b = Number(b)

  const sequences = getSequences(arr)
  let isSequenceFound = false

  for (const sequence of sequences) {
    if (isSequenceCorrect(sequence, len, b)) {
      fs.writeFileSync('output.txt', sequence.length.toString())
      isSequenceFound = true
      break
    }
  }

  if (!isSequenceFound) {
    fs.writeFileSync('output.txt', '0')
  }
})()