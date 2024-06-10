// Не забудьте перед отправкой изменить в module.exports = function(html, css) {
export default function (html, css) {
  const COMBINATORS = ['>', '+', '~']
  let parents = []
  let prevNeighbor
  let nextNeighbor = null

  try {
    function applyStylesController(selectedNode) {
      for (let style of css) {
        let splittedSelector = style.selector.split(' ')

        switch (splittedSelector.length) {
          case 1:
            if (style.selector === selectedNode.tag) {
              applyDeclarations(selectedNode, style)
            }
            break
          case 2:
            if (splittedSelector[0] === selectedNode.tag) {
              applyToChildren(selectedNode, style)
            }
            break
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
          loopNodes(currentNodes[i].children, applyStylesController);
        }
      }
    }

    loopNodes([html], applyStylesController)
    console.log(html)

    return html;
  } catch (e) {
    console.error(e)
  }
}
