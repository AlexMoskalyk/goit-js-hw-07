// const inputRef = document.querySelector('#name-input');
// console.log(inputRef);
// const outputRef = 
// console.log(outputRef);

const refs = {
    input: document.querySelector('#name-input'),
    output:document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInput);

function onInput({target}) {
    let inputValue = 'незнакомец';
    if (target.value) {
        inputValue = target.value;
    }
    refs.output.textContent = inputValue;
}

