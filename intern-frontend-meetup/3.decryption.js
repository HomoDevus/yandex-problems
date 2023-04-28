module.exports = function (text, tokensMap, rules) {
  additionalRuleParse(tokensMap, rules)

  let decrypted = ''
  const swappedTokensMap = swapKeysAndValues(tokensMap)
  const swappedRules = swapKeysAndValues(rules)
  let lines = text.split(swappedRules['\n'])
  console.log(lines)
  lines = lines.map(line => line.split('='))
  console.log(lines)
  const usedTokens = new Set()

  for (let line of lines) {
    let [key, val] = line
    debugger

    if (val) {
      if (!usedTokens.has(key)) {
        decrypted += 'let '
        usedTokens.add(key)
      }

      decrypted += swappedTokensMap[key]
    } else {
      val = key
      key = undefined
    }

    if (val) {
      decrypted += rules['=']

      for (let char of val.split('')) {
        decrypted += rules[char]
      }
    }

    decrypted += '\n'
  }

  return decrypted
}

function swapKeysAndValues(obj) {
  const ret = {};
  Object.keys(obj).forEach(key => {
    ret[obj[key]] = key;
  });
  return ret;
}

function additionalRuleParse(tokensMap, rules) {
  for (let [tokenKey, tokenVal] of Object.entries(tokensMap)) {
    if (tokenKey[0] === '-') {
      rules[tokenKey[1]] = rules[tokenVal]
    }
  }
}