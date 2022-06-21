// Не забудьте перед отправкой изменить в module.exports = function(html, css) {
export default function (html, css) {
  let parents = []
  let prevNeighbor
  let nextNeighbor = null

  function loopNodes(currentNodes) {
    for (let i = 0; i < currentNodes.length; i++) {
      if (!currentNodes[i]) {
        continue;
      }

      // debugger
      let selectedNode = currentNodes[i]
      console.log(selectedNode)
      let stylesToApply = css.filter(style => style.selector === selectedNode.tag)
      if (stylesToApply) {
        for (let styles of stylesToApply) {
          console.log(styles)
          for (const [key, value] of Object.entries(styles.declarations)) {
            selectedNode.styles[key] = value
          }
        }
      }

      if (currentNodes[i]?.children?.length > 0) {
        loopNodes(currentNodes[i].children);
      }
    }
  }

  loopNodes([html])

  return html;
}
