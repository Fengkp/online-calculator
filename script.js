function addQueueEvent(btnClass) {
    const buttons = document.querySelectorAll(btnClass);

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            queue.push(e.target.textContent);
        });
        btn.addEventListener('click', updateResult);
    });
}

function updateResult() {
    const results = document.querySelector('h2');
    let equation = queue.join('');

    results.textContent = equation;
}

function clearResult() {
    const results = document.querySelector('h2');
    results.textContent = 0;
    queue = [];
}

function backspace() {
    queue.pop();
    updateResult();
}


function parseQueue() {
    let num = '';
    let equation = [];
    let ops = [];

    while (queue.length != 0) {
        if (queue[0].match(/[+\-*\/=]/)) {
            equation.push(String(num));
            ops.push(queue[0]);
            num = '';
            equation.push(queue.shift());
        }
        num += queue.shift();
    }
    ops.pop();
    ops = determinePriority(ops);
    equate(equation, ops);
}

function determinePriority(ops) {
    let newOps = [];
    let opIndex;
    const priority = /[*\/]/;

    while (ops.length > 0) {
        opIndex = ops.join('').search(priority)
        if (opIndex > -1) 
            newOps.push(ops[opIndex]);
        else {
            newOps.push(ops.shift());
            continue;
        }
        ops.splice(opIndex, 1);  
    }
    return newOps;
}

function equate(equation, ops) {
    let opIndex;
    let result;

    while(ops.length > 0) {
        opIndex = equation.indexOf(ops[0]);
        if (ops[0] === '*') 
            result = multiply(equation[opIndex - 1], equation[opIndex + 1]);
        else if (ops[0] === '/') 
            result = divide(equation[opIndex - 1], equation[opIndex + 1]);
        else if (ops[0] === '+') 
            result = add(equation[opIndex - 1], equation[opIndex + 1]);
        else if (ops[0] === '-')
            result = subtract(equation[opIndex - 1], equation[opIndex + 1]);
        ops.shift();
        equation.splice(opIndex - 1, 3, String(result));
    }
    equation.pop();
    queue = equation;
    updateResult();
    queue = [];
}

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function start() {
    addQueueEvent('.btn-num');
    addQueueEvent('.btn-op');
    addQueueEvent('.btn-equal');
    const equalBtn = document.querySelector('.btn-equal');
    equalBtn.addEventListener('click', parseQueue);
    const clearBtn = document.querySelector('.btn-clr');
    clearBtn.addEventListener('click', clearResult);
    const delBtn = document.querySelector('.btn-del');
    delBtn.addEventListener('click', backspace);
}

let queue = [];
start();
