function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const clickMouse = document.querySelector('.change-color');
const bodyBg = document.querySelector('body');
const newSpan = document.querySelector('.color');

clickMouse.addEventListener('click', newBackg);

function newBackg() {
  bodyBg.style.backgroundColor = getRandomHexColor();
  newSpan.innerHTML = `${getRandomHexColor()}`;
}
