function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxDiv = document.querySelector('#boxes');
const inputNumber = document.querySelector('input');

buttonCreate.style.backgroundColor = '#4E75FF';
buttonDestroy.style.backgroundColor = '#FF4E4E';

buttonCreate.addEventListener('click', addBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function addBoxes() {
  destroyBoxes();
  createBoxes(inputNumber.value);
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    let boxWidth = 30;
    let boxHeight = 30;
    for (let index = 0; index < amount; index++) {
      const newDiv = document.createElement('div');
      boxDiv.append(newDiv);

      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.style.width = boxWidth + 'px';
      newDiv.style.height = boxHeight + 'px';

      boxWidth += 10;
      boxHeight += 10;
    }
  }
}

function destroyBoxes() {
  boxDiv.innerHTML = '';
}
