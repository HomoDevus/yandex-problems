const buildBlock = ({ type, content, className, style, insertType }) => {
  answerString += answerString.replace(
    /PLACE_TO_REPLACE/,
    `<${type} class="${className}" style="${style}">
                 ${content}${insertType === 'append' ? 'PLACE_TO_REPLACE' : ''}
               </${type}>${insertType === 'after' ? 'PLACE_TO_REPLACE' : ''}`
  );
};