const inputRefs = document.querySelector('#validation-input');

inputRefs.addEventListener('blur', inputHandler);

function inputHandler({target}) {
    
    if (target.value.length === Number(target.dataset.length)) {
        changeColor('valid', 'invalid')
    // target.classList.add('valid')
    // target.classList.remove('invalid')
        return
    }
    changeColor('invalid', 'valid')
    // target.classList.remove('valid')
    // target.classList.add('invalid')
}


function changeColor(addClass, removeClass) {
    inputRefs.classList.add(addClass)
    inputRefs.classList.remove(removeClass)
}