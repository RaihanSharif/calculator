const first = 0;
const second = 0;
const operator = '';


function add(num1, num2) {}

function subtract(num1, num2) {}

function mutiply(num1, num2) {}

function divide(num1, num2) {}

function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            mutiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}