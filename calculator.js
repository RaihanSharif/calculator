let first = '';
let second = '';
let operator = '';


function add(num1, num2) { return num1 + num2; }

function subtract(num1, num2) { return num1 - num2;}

function mutiply(num1, num2) { return num1 * num2;}

function divide(num1, num2) {return num1/num2;}

function operate(num1, operator, num2) {
    n1 = parseFloat(num1);
    n2 = parseFloat(num2);
    switch(operator) {

        case '+':
            return add(n1, n2);
            case '-':
                return subtract(n1, n2);
        case '*':
            return mutiply(n1, n2);
        case '/':
            return divide(n1, n2);
    }
}

const calcContainer = document.querySelector('#calc-container');
let display = document.querySelector('#display');
let isLastButtonOperator = false;
let currentOperator = display;

function operandHandler(tg) {
    second += tg.value;
    display.textContent = second;
    isLastButtonOperator = false;

}

function equalsHandler() {
    if (first != '' && second != '' && operator != '') {
        temp = first;
        first = operate(first, operator, second);
        second = '';
        display.textContent = first;
    }
}

function clearAll() {
    // clears operands, operator and screen
}
function backspace() {
    // backspace on the operand
}

function operatorHandler(target) {
    
    if (first == '') {
        first = second;
        second = '';
    } 
    equalsHandler();
    operator = target.value;
    

}

calcContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('numeric')) {
        currentOperator.classList.remove("active");
        operandHandler(target);
    }
    
    if(target.classList.contains('operator')) {
        currentOperator.classList.remove("active");
        currentOperator = target;
        currentOperator.classList.add("active");
        operatorHandler(target);
    }

    if (target.id === "equals") {
        equalsHandler(target);
        operator = '';
    }
});