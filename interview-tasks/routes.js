function buildPath(routes) {
  let tos = new Set(routes.map(route => route.to))
  let ans = []
  // Find first item
  for (let route of routes) {
    if (!tos.has(route.from)) {
      ans.push(route)
      break
    }
  }

  for (let i = 0; i < routes.length - 1; i++) {
    ans.push(routes.find(route => ans[i].to === route.from))
  }

  return ans
}

console.log(buildPath([{ from: 'A', to: 'B' }, { from: 'C', to: 'D' }, { from: 'B', to: 'C' }]))