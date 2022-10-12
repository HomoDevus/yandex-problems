import fetch from 'node-fetch';

function limitRequests(urls, limit, callback) {
  let responses = new Array(urls.length).fill(null)
  let globalIndex = 0

  while (globalIndex < urls.length && limit > 0) {
    console.log(globalIndex, ' request')
    queueRequest(urls[globalIndex], globalIndex)
    limit--
  }

  function queueRequest(url, index) {
    globalIndex++
    fetch(url)
      .then(res => {
        console.log(index, ' response')
        responses[index] = res
        if (globalIndex < urls.length) {
          console.log(globalIndex, ' request')
          queueRequest(urls[globalIndex], globalIndex)
        }

        if (!responses.includes(null)) {
          callback(responses)
        }
      })
  }
}

limitRequests([
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3',
    'https://jsonplaceholder.typicode.com/users/4',
    'https://jsonplaceholder.typicode.com/users/5',
    'https://jsonplaceholder.typicode.com/users/6',
  ],
  3,
  (res) => {Promise.all(res.map(res => res.json())).then(res => console.log(res))}
  )