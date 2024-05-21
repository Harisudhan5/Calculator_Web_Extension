let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    if (currentOperation === '') {
        firstOperand += number;
        display.value = firstOperand;
    } else {
        secondOperand += number;
        display.value = secondOperand;
    }
}

function chooseOperation(operation) {
    if (firstOperand === '') return;
    if (secondOperand !== '') {
        calculateResult();
    }
    currentOperation = operation;
}

function calculateResult() {
    let result;
    const first = parseFloat(firstOperand);
    const second = parseFloat(secondOperand);
    if (isNaN(first) || isNaN(second)) return;
    switch (currentOperation) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
        default:
            return;
    }
    display.value = result;
    firstOperand = result.toString();
    secondOperand = '';
    currentOperation = '';
}

function clearDisplay() {
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
    display.value = '';
}
