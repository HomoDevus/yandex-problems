function useCalc(calc, keys) {
  return [...keys].reduce(
    function showDisplay(display, key) {
      var ret = String(calc(key));
      return (
        display +
        (
          (ret != '' && key == '=') ?
            '=' :
            ''
        ) +
        ret
      );
    },
    ''
  )
}

function formatTotal(display) {
  if (Number.isFinite(display)) {
    // constrain display to max 11 chars
    let maxDigits = 11
    // reverse space for "e+" notation?
    if (Math.abs(display) > 99999999999) {
      maxDigits -= 6;
    }
    // reverse space for "-"?
    if (display < 0) {
      maxDigits--;
    }

    // whole number?
    if (Number.isInteger(display)) {
      display = display
        .toPrecision(maxDigits)
        .replace(/\.0+$/, '');
    }
    // decimal
    else {
      // reserve space for "."
      maxDigits--;
      // reserve space for leading "0"?
      if (
        Math.abs(display) >= 0 &&
        Math.abs(display) < 1
      ) {
        maxDigits--;
      }
      display = display
        .toPrecision(maxDigits)
        .replace(/0+$/, '');
    }
  } else {
    display = 'ERR';
  }
  return display;
}

function calculator() {
  let expression = ''
  let isAnswer = false

  function calc(operation) {
    // If it's number after = sign, them remove previous answer
    if (isAnswer && parseInt(operation)) {
      expression = ''
    }

    expression += operation

    if (operation === '=') {
      let answer = compose(expression)
      answer = formatTotal(answer)
      expression = answer
      isAnswer = true
      console.log(answer)
    } else {
      console.log(operation)
      isAnswer = false
    }
  }

  return {
    number: (number) => calc(number),
    plus: () => calc("+"),
    minus: () => calc("-"),
    mult: () => calc("*"),
    div: () => calc("/"),
    eq: () => calc("="),
  }
}

function isOperator(operation) {
  return operation === '+' || operation === '-' || operation === '*' || operation === '/' || operation === "="
}

function calculate(leftOfExpression, operator, rightOfExpression) {
  switch (operator) {
    case '+':
      return String(parseInt(leftOfExpression) + parseInt(rightOfExpression))
    case '-':
      return String(parseInt(leftOfExpression) - parseInt(rightOfExpression))
    case '*':
      return String(parseInt(leftOfExpression) * parseInt(rightOfExpression))
    case '/':
      return String(parseInt(leftOfExpression) / parseInt(rightOfExpression))
  }
}

function compose(expression) {
  let leftOfExpression = ''
  let rightOfExpression = ''
  let operator

  for (let operation of expression) {
    if (isOperator(operation)) {
      if (operator) { // if it's not a first operator assignment, then calculate
        leftOfExpression = calculate(leftOfExpression, operator, rightOfExpression)
        rightOfExpression = ''
      }

      operator = operation
    } else if (operator) {
      rightOfExpression += operation
    } else {
      leftOfExpression += operation
    }
  }

  return Number(leftOfExpression)
}

let calc = calculator()

calc.number("4")
calc.plus()
calc.number("7")
calc.number("3")
calc.minus()
calc.number("2")
calc.eq()
