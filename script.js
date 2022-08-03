function createNumButtons() {
    const numbersContainer = document.querySelector('.numbers');

    for (let i = 1; i < 11; i++) {
        let num = i;
        const btn = document.createElement('button');

        if (i == 10)
            num = 0;

        btn.setAttribute('id', `num-${num}`);
        btn.classList.add('numberBtn');
        btn.textContent = `${num}`;
        btn.addEventListener('click', getNumber);
        numbersContainer.appendChild(btn);
    }
}

function createResultsBox() {
    const resultsContainer = document.querySelector('.results');
    const resultsLabel = document.createElement('h2');
    
    resultsLabel.textContent = '0';
    resultsContainer.appendChild(resultsLabel);
}

function createOperationButtons() {
    const operations = ['+', '-', '*', '/', '='];
    const operationsContainer = document.querySelector('.operations');

    operations.forEach(operation => {
        const btn = document.createElement('button');
        btn.setAttribute('id', `op-${operation}`);
        btn.classList.add('operationBtn');
        btn.textContent = operation;
        btn.addEventListener('click', parseNumber);
        operationsContainer.appendChild(btn);
    });
}

function getNumber() {
    numbersClicked.push(this.textContent);
    displayNumber()
}

function displayNumber() {
    const results = document.querySelector('h2');
    let equation = numbersClicked.join('');

    results.textContent = equation;
}

function parseNumber() {
    let fullNum = "";

    numbersClicked.forEach(num => {
        fullNum = fullNum.concat(num);
    });
    workingNumbers.push(Number(fullNum))
    numbersClicked = [];
}

let numbersClicked = [];
let workingNumbers = [];

createResultsBox();
createNumButtons();
createOperationButtons();