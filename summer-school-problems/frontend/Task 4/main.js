const Worker = require("./WorkerClass");

module.exports = (input) => new Promise(async (resolve) => {
  if (input.length) {
    loopOverInputs(input)
  } else {
    resolve('0')
  }

  function concat(strings) {
    let concatedStrings = []

    if (strings.length === 1) {
      resolve(strings[0])
    } else {
      for (let i = 0; i < strings.length; i += 2) {
        if (i + 1 < strings.length) {
          concatedStrings.push(strings[i] + strings[i + 1])
        } else {
          concatedStrings.push(strings[i] + strings[i])
        }
      }
    }

    loopOverInputs(concatedStrings)
  }

  function loopOverInputs(inputs) {
    let ans = []
    let queue = []

    for (let text of inputs) {
      try {
        const worker = new Worker('./WorkerClass'); // создаём подпрограмму, которая займёт один из потоков

        worker.onMessage = ({ data }) => { // подписываемся на его сообщение
          // тут работа выполнена, используем data и освобождаем процесс
          ans.push(data)

          worker.delete();

          if (ans.length === data.length) {
            concat(ans)
          } else if (queue.length) {
            worker.postMessage(queue.shift())
          }
        };

        worker.postMessage(text); // отправляем сообщение подпрограмме, чтобы он начал работу
      } catch (e) {
        queue.push(text)
      }
    }
  }
})