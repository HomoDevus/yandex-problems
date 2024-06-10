let factorizeCached = cache(factorize)
let isPrimeCached = cache(isPrime)

function cache(funcToCache) {

  const cached = {}
  return function cacheCheck(...props) {
    let joinedProps = props.join(', ')

    if (!cached[joinedProps]) {
      cached[joinedProps] = funcToCache(...props)
    }

    return cached[joinedProps]
  }

}

let start = new Date()


function isPrime(v) {
  if (v <= 3) {
    return v > 1;
  }
  if (v % 2 == 0 || v % 3 == 0) {
    return false;
  }
  var vSqrt = Math.sqrt(v);
  for (let i = 5; i <= vSqrt; i += 6) {
    if (v % i == 0 || v % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

function factorize(v) {
  if (!isPrimeCached(v)) {
    let i = Math.floor(Math.sqrt(v));
    while (v % i != 0) {
      i--;
    }
    return [
      ...factorize(i),
      ...factorize(v / i)
    ];
  }
  return [v];
}

console.log(factorizeCached(423423432))

console.log(new Date() - start)