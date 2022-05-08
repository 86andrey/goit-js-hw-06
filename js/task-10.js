function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');


btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

let beginnerSize = 30;

function createBoxes() {
  let boxSize = 30;
  let arrayBoxes = [];
  for (let i = 1; i <= inputNumber.value; i += 1) {
    boxSize = beginnerSize + i * 10;
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.margin = "30px"
    arrayBoxes.push(box); 
  }
  beginnerSize = boxSize + 10;
  boxes.append(...arrayBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}