'use strict';

const categoryItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

const textCategoriesAll = document.querySelectorAll('h2');

for (let i = 0; i < categoryItems.length; i++) {
  console.log(`Categories: ${textCategoriesAll[i].textContent}`);

  const lastELement = categoryItems[i].lastElementChild;
  console.log(`Elements: ${lastELement.children.length}`);
}
