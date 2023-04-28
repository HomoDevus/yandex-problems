// function buildPath(routes) {
//   let tos = new Set(routes.map(route => route.to))
//   let ans = []
//   // Find first item
//   for (let route of routes) {
//     if (!tos.has(route.from)) {
//       ans.push(route)
//       break
//     }
//   }
//
//   for (let i = 0; i < routes.length - 1; i++) {
//     ans.push(routes.find(route => ans[i].to === route.from))
//   }
//
//   return ans
// }

function buildPath(routes) {
  const path = []
  const routesMap = {}
  let routesTos = new Set()

  for (let route of routes) {
    routesMap[route.from] = route.to
    routesTos.add(route.to)
  }

  // Find start
  path.push(routes.find(route => !routesTos.has(route.from)))

  while(path.length !== routes.length) {
    const lastTo = path[path.length - 1].to
    const nextRoute = routesMap[lastTo]
    path.push({from: lastTo, to: nextRoute})
  }

  return path
}

console.log(buildPath([{ from: 'A', to: 'B' }, { from: 'C', to: 'D' }, { from: 'B', to: 'C' }]))