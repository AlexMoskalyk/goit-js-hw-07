const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
}

refs.input.addEventListener('input', inputHalder);

function inputHalder(event) {
    if (event.target.value) {
       refs.span.style.fontSize = `${Number(event.target.value)}px`
    }
}