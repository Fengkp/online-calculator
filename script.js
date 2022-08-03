function createNumBtns() {
    const numbers = document.querySelectorAll('.btn-num');

    numbers.forEach(number => {
        number.addEventListener('click', getNumber);
        number.addEventListener('click', displayNumber);
    });
}


function getNumber() {
    queue.push(this.textContent);
}

function displayNumber() {
    const results = document.querySelector('h2');
    let equation = queue.join('');

    results.textContent = equation;
}

let queue = [];


createNumBtns();

