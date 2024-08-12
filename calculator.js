let first = '';
let second = '';
let operator = '';
const calcContainer = document.querySelector('#calc-container');
let display = document.querySelector('#display');
let currentOperator = display;


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

// would probably be far easier to work with if I processed the display input instead of values
// puts any new operand on the right hand side
function operandHandler(tg) {
    second += tg.value;
    display.textContent = second;

}

// if equals button is pressed or triggered by a 
// math operator chain. 
// stores the result in the left hand side, ready to use in future 
// operations
function equalsHandler() {
    if (first != '' && second != '' && operator != '') {
        first = operate(first, operator, second);
        second = '';
        display.textContent = first;
        console.log("displaying first");
    }
}

function clearAll() {
    first = '';
    second = '';
    operator = ''
    currentOperator.classList.remove("active");
    display.textContent = second;
}

function backspace() {

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
        currentOperator.classList.remove("active");
    } else if (target.id === "clear") {
        clearAll();
    } else if(target.id === "backspace") {
        backspace();
    }
});