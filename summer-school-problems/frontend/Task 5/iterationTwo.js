// Не забудьте перед отправкой изменить в module.exports = function(html, css) {
export default function (html, css) {
  const COMBINATORS = ['>', '+', '~']
  let parents = []
  let prevNeighbor
  let nextNeighbor = null

  try {
    function applyStyles(selectedNode) {
      let stylesToApply = css.filter(style => style.selector === selectedNode.tag)
      if (stylesToApply.length) {
        for (let styles of stylesToApply) {
          applyDeclarations(selectedNode, styles)
        }
      }

      let withEmptySelectors = css.filter(
        style => {
          let splitted = style.selector.split(' ')
          return splitted.length === 2 && splitted[0] === selectedNode.tag
        }
      )
      if (withEmptySelectors.length) {
        for (let styles of withEmptySelectors) {
          applyToChildren(selectedNode, styles)
        }
      }
    }

    function applyDeclarations(selectedNode, styles) {
      for (const [key, value] of Object.entries(styles.declarations)) {
        selectedNode.styles[key] = value
      }
    }

    function applyToChildren(parentNode, styles) {
      function applyStylesIfChild(selectedNode, styles) {
        if (styles.selector.split(' ')[1] === selectedNode.tag) {
          applyDeclarations(selectedNode, styles)
        }
      }

      loopNodes(parentNode.children, (selectedNode) => {
        applyStylesIfChild(selectedNode, styles)
      })
    }

    function loopNodes(currentNodes, applyFunction) {
      for (let i = 0; i < currentNodes.length; i++) {
        if (!currentNodes[i]) {
          continue;
        }

        applyFunction(currentNodes[i])

        if (currentNodes[i]?.children?.length > 0) {
          loopNodes(currentNodes[i].children, applyStyles);
        }
      }
    }

    loopNodes([html], applyStyles)

    return html;
  } catch (e) {
    console.error(e)
  }
}
