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
        numbersContainer.appendChild(btn);
    }
}

createNumButtons();