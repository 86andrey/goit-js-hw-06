function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
    body: document.body,
    btnChangeColor: document.querySelector('.change-color'),
    colorName: document.querySelector('.color')
}

refs.btnChangeColor.addEventListener('click', changeColor);

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = getRandomHexColor();
};



