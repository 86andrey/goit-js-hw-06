const slider = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

slider.addEventListener('input', onInputSize);

function onInputSize() {
    textChange.style.fontSize = slider.value + `px`;
};