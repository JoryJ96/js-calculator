setup();

function setup() {
    const buttonLayout = document.querySelector('.buttons');

    let workingNum = '';
    let firstNum = '';
    let secondNum = '';
    let operand = '';

    for (let i = 0; i < 10; i++) {
        var btn = document.createElement('button');
        btn.classList.add(`${i}`, 'num');
        btn.textContent = `${i}`;

        buttonLayout.appendChild(btn);
    }

    document.querySelector('.num').addEventListener('click', (e) => {
        const selection = e.target.textContent;

        // Did user select an operation, and if so, was one already selected?
        if (selection === '*' || selection === '/' || selection === '+' || selection === '+') {
            if (operand != '') {
                return;
            } else {
                operand += selection;
                return;
            }
        }

        // Did user select the enter button? Have two numbers and an operand been determined?
        if (selection === '->') {
            if (firstNum != '' && secondNum != '' && operand != '') {
                
            }
        }

        // Has an operand already been selected? If no, append selection to firstNum, else, secondNum
        workingNum += selection;
    })
}