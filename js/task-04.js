const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const newValue = document.querySelector('#value');

let counterValue = 0; 

btnDec.addEventListener('click', () => {
    counterValue -= 1;
    newValue.textContent = counterValue;
});

btnInc.addEventListener('click', () => {
    counterValue += 1;
    newValue.textContent = counterValue;
});
