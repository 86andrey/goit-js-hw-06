const inputSymbols = document.querySelector('#validation-input');
console.log();

inputSymbols.addEventListener('blur', checkQuantityCharacters);

function checkQuantityCharacters(event) {
    if (event.currentTarget.value.length === Number(inputSymbols.dataset.length)) {
    inputSymbols.classList.add('valid');
    } else {
        inputSymbols.classList.add('invalid');
    }; 
    console.log(inputSymbols);
};

inputSymbols.addEventListener('focus', clearClassOnInput);

function clearClassOnInput() {
    inputSymbols.classList.remove('valid', 'invalid');
console.log(inputSymbols);
} 