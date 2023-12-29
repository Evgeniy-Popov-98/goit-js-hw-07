'use strict';

function getElementWidth(content, padding, border) {
  content = Number.parseInt(content);
  padding = Number.parseInt(padding) * 2;
  border = Number.parseFloat(border) * 2;

  const widht = content + padding + border;

  return widht;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
