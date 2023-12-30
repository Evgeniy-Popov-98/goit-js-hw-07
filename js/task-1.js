'use strict';

const numbers = document.querySelectorAll('.item');
console.log(`Number of categories: ${numbers.length}`);

const textCategoriesAll = document.querySelectorAll('h2');
const sumNumberLi = document.querySelectorAll('.item');

for (let i = 0; i < numbers.length; i++) {
  console.log(`Categories: ${textCategoriesAll[i].textContent}`);

  const lastELemet = sumNumberLi[i].lastElementChild;
  console.log(`Elements: ${lastELemet.children.length}`);
}
