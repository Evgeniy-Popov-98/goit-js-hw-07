const userName = document.querySelector('#name-input');
const newSpan = document.querySelector('#name-output');

userName.addEventListener('input', onInput);

function onInput() {
  const name = userName.value.trim();
  if (name) {
    newSpan.innerHTML = `${name}`;
  } else {
    newSpan.innerHTML = 'Anonymous';
  }
}
