// Не забудьте перед отправкой изменить в module.exports = function(html, css) {
export default function (html, css) {
  try {
    function applyDeclarations(selectedNode, styles) {
      for (const [key, value] of Object.entries(styles.declarations)) {
        selectedNode.styles[key] = value
      }
    }

    function applyStylesController(selectedNode, prevNode) {
      for (let style of css) {
        let splittedSelector = style.selector.split(' ')

        if (splittedSelector[0] === selectedNode.tag) {
          switch (splittedSelector.length) {
            case 1:
              applyDeclarations(selectedNode, style)
              break
            case 2:
              applyToChildren(selectedNode, style)
              break
            case 3:
              if (splittedSelector[1] === '>') {
                applyToDirectChildren(selectedNode, style)
              } else if (splittedSelector[1] === '+') {
                applyToNextNeighbor(selectedNode, prevNode, style)
              } else if (splittedSelector[1] === '~') {
                applyToAllNextNeighbors(prevNode, style)
              }
          }
        }
      }
    }

    // Функции по типу правила
    function applyToChildren(parentNode, styles) {
      function applyStylesIfChild(selectedNode, styles) {
        if (styles.selector.split(' ')[1] === selectedNode.tag) {
          applyDeclarations(selectedNode, styles)
        }
      }

      loopNodes(parentNode.children, parentNode, (selectedNode) => {
        applyStylesIfChild(selectedNode, styles)
      })
    }

    function applyToDirectChildren(parentNode, styles) {
      for (let child of parentNode.children) {
        if (child.tag === styles.selector.split(' ')[2]) {
          applyDeclarations(child, styles)
        }
      }
    }

    function applyToNextNeighbor(parentNode, prevNode, style) {
      let parentNodeStringfied = JSON.stringify(parentNode)
      let prevNodeChildren = prevNode.children

      for (let i = 0; i < prevNodeChildren.length - 1; i++) {
        let nodeStringfied = JSON.stringify(prevNodeChildren[i])

        if (parentNodeStringfied === nodeStringfied) {
          let neighborNode = prevNodeChildren[i + 1]
          if (neighborNode.tag === style.selector.split(' ')[2]) {
            applyDeclarations(neighborNode, style)
          }
        }
      }
    }

    function applyToAllNextNeighbors(prevNode, style) {
      let prevNodeChildren = prevNode.children
      let selectorSplitted = style.selector.split(' ')

      for (let i = 0; i < prevNodeChildren.length; i++) {
        if (selectorSplitted[0] === prevNodeChildren[i].tag && selectorSplitted[2] === prevNodeChildren[i + 1].tag) {
          applyDeclarations(prevNodeChildren[i + 1], style)
        }
      }
    }
    // ===================

    function loopNodes(currentNodes, prevNode, applyFunction) {
      for (let i = 0; i < currentNodes.length; i++) {
        if (!currentNodes[i]) {
          continue;
        }

        applyFunction(currentNodes[i], prevNode)

        if (currentNodes[i]?.children?.length > 0) {
          loopNodes(currentNodes[i].children, currentNodes[i], applyStylesController);
        }
      }
    }

    loopNodes([html], null, applyStylesController)
    console.log(html)

    return html;
  } catch
    (e) {
    console.error(e)
  }
}
