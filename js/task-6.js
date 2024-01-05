function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input');
const addInDiv = document.querySelector('#boxes');

// inputNumber.addEventListener('blur', newdiv);
buttonCreate.addEventListener('click', checkAmount);
buttonDestroy.addEventListener('click', destroyBoxes);

function checkAmount() {
  const amount = inputNumber.value;
  console.log(amount);
}

function addDiv() {
  const amount = inputNumber.value;
  console.log(amount);
  if (amount >= 1 && amount <= 100) {
    let width = 30;
    let height = 30;
    for (let index = 0; index < amount; index++) {
      const newDiv = document.createElement('div');
      addInDiv.append(newDiv);

      newDiv.classList.add('div-box');
      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.style.width = width + 'px';
      newDiv.style.height = height + 'px';
      newDiv.style.margin = '10px';

      width += 10;
      height += 10;
    }
  } else {
    alert('Enter value from 1 to 100');
  }
}

function destroyBoxes() {
  const removeDiv = addInDiv.querySelector('div');
  //   const removeDiv = addInDiv.children;
  console.log(removeDiv);
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    removeDiv.remove();
  }
}
