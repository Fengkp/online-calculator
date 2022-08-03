function createNumBtns() {
    const numbers = document.querySelectorAll('button');

    numbers.forEach(number => {
        number.addEventListener('click', getNumber);
        number.addEventListener('click', updateResult);
    });
}

function getNumber() {
    queue.push(this.textContent);
}

function updateResult() {
    const results = document.querySelector('h2');
    let equation = queue.join('');

    results.textContent = equation;
}

function add(...nums) {
    let result = 0;

    nums.forEach(num => {
        result += num;
    })
    return result;
}

function parseQueue() {
    let num = '';
    let nums = [];
    let ops = [];

    while (queue.length != 0) {
        if (queue[0].match(/[+\-*\/=]/g)) {
            nums.push(Number(num));
            num = '';
            ops.push(queue.shift());
        }
        num += queue.shift();
    }
    equate(nums, ops);
}

function equate(nums, ops) {
    if (ops[0] === '+') 
        queue.push(add(nums.shift(), nums.shift()));
    updateResult()
    queue = [];
}

let queue = [];

createNumBtns();

const equalBtn = document.querySelector('.equal-btn');
equalBtn.addEventListener('click', parseQueue);
