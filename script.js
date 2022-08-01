function createNumButtons() {
    const numbersContainer = document.querySelector('.numbers');

    for (let i = 1; i < 11; i++) {
        let num = i;
        const btn = document.createElement('button');

        if (i == 10)
            num = 0;

        btn.setAttribute('id', num);
        btn.classList.add('numberBtn');
        btn.textContent = `${num}`;
        btn.addEventListener('click', getNumber);
        numbersContainer.appendChild(btn);
    }
}

function createResultsBox() {
    const resultsContainer = document.querySelector('.results');
    const resultsLabel = document.createElement('label');
    
    resultsLabel.textContent = 'TEST';
    resultsContainer.appendChild(resultsLabel);
}

function getNumber() {
    numbersClicked.push(this.textContent);
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

const test = document.querySelector('.test');
test.addEventListener('click', () => {
    parseNumber();
    workingNumbers.forEach(num => {
        console.log(num);
    })
})