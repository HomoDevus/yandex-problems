let answerString = ''
let closingTags = ''

const TEXT_STYLES_MAPPER = {
  fontSize: (value) => `font-size: ${value}px;`,
  fontWeight: (value) => `font-weight: ${value};`,
  textAlignHorizontal: (value) => `text-align: ${value.toLowerCase()};`,
}

const IMAGE_STYLES_MAPPER = {
  width: (value) => `width: ${value}px;`,
  height: (value) => `height: ${value}px;`
}

const buildBlock = ({ type, content, className, style }) => {
  answerString += `<${type} class="${className}" style="${style}">${content}`
  if (type !== 'img') {
    closingTags = `</${type}>` + closingTags
  }
};

const getTextStyles = (node) => {
  const styleArr = [];
  if (node.style) {
    for (let [key, value] of Object.entries(node.style)) {
      if (TEXT_STYLES_MAPPER[key]) {
        styleArr.push(TEXT_STYLES_MAPPER[key](value));
      }
    }
  }
  return styleArr.join(' ');
}

const getImageStyles = (node) => {
  const styleArr = []
  if (
    node.absoluteBoundingBox
    && node.absoluteBoundingBox.width
    && node.absoluteBoundingBox.height
  ) {
    styleArr.push([IMAGE_STYLES_MAPPER.width(node.absoluteBoundingBox.width)])
    styleArr.push([IMAGE_STYLES_MAPPER.height(node.absoluteBoundingBox.height)])
  }
  return styleArr.join(' ')
}

const PRIMITIVES = {
  TEXT: (node) => {
    return buildBlock({
      type: 'span',
      content: node.characters,
      className: node.type,
      style: getTextStyles(node),
    });
  },
  FRAME: (node) => {
    return buildBlock({
      type: 'div',
      content: '',
      className: node.type,
      style: ''
    })
  },
  RECTANGLE: (node) => {
    return buildBlock({
      type: 'img',
      content: '',
      className: node.type,
      style: getImageStyles(node)
    })
  }
};


const parse = (entry) => {
  return traverse(entry.children[0]);
};

const traverse = (node) => {
  // тут надо придумать, как обходить дерево:)
  function loopNodes(currentNode){
    let currentNodes = currentNode.children;

    for (let i = 0; i < currentNodes.length; i++){
      if(!currentNodes[i]){
        continue;
      }

      let selectedNode = currentNodes[i]
      if (PRIMITIVES[selectedNode.type]) {PRIMITIVES[selectedNode.type](selectedNode)}

      if(currentNodes[i]?.children?.length > 0){
        loopNodes(currentNodes[i]);
      }
    }
  }

  loopNodes(node)
  return answerString + closingTags
};

module.exports = function (json) {
  const entry = json.document.children[0];
  return parse(entry);
};
