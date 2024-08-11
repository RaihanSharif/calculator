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

const calcContainer = document.querySelector('#calc-container');
const display = document.querySelector('#display');
calcContainer.addEventListener('click', (event) => {
    const target = event.target;
    
    switch(target.id) {
        case "backspace":
            display.textContent = display.textContent.slice(0, -1);
            break;
        case "clear":
            display.textContent = '';
            break;
        case "1":
            display.textContent += 1;
            break;
        case "2":
            display.textContent += 2;
            break;
        case "3":
            display.textContent += 3;
            break;
        case "4":
            display.textContent += 4;
            break;
        case "5":
            display.textContent += 5;
            break;
        case "6":
            display.textContent += 6;
            break;
        case "7":
            display.textContent += 7;
            break;
        case "8":
            display.textContent += 8;
            break;
        case "9":
            display.textContent += 9;
            break;
        case "0":
            display.textContent += 0;
            break;
        case "decimal":
            display.textContent += ".";
            break;
        case "plus":
            display.textContent += "+";
            break;
        case "minus":
            display.textContent += "-";
            break;
        case "multiply":
            display.textContent += "*";
            break;
        case "divide":
            display.textContent += "/";
            break;

    }
});