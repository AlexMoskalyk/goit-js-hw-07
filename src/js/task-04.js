const box = document.querySelector('#counter');

const refs = {
    buttonDecrement: box.querySelector('[data-action="decrement"]'),
    buttonInecrement: box.querySelector('[data-action="increment"]'),
    number: box.querySelector('#value')
}

let counter = 0;
refs.number.textContent = counter;



refs.buttonDecrement.addEventListener('click', onDecrement)

function onDecrement() {
    // if (counter === 0) {
    //     return;
    // }
    // counter = counter - 1;
    counter -= 1;
    refs.number.textContent = counter;
};



refs.buttonInecrement.addEventListener('click', onIncrement)

function onIncrement() {
    // counter = counter + 1;
    counter += 1;
    refs.number.textContent = counter;
};