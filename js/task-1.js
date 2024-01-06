'use strict';

const categoryItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

const textCategoriesAll = document.querySelectorAll('h2');
const sumNumberLi = document.querySelectorAll('.item');

for (let i = 0; i < categoryItems.length; i++) {
  console.log(`Categories: ${textCategoriesAll[i].textContent}`);

  const lastELemet = sumNumberLi[i].lastElementChild;
  console.log(`Elements: ${lastELemet.children.length}`);
}
