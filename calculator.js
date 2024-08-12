let first = '';
let second = '';
let operator = '';


function add(num1, num2) { return num1 + num2; }

function subtract(num1, num2) { return num1 - num2;}

function mutiply(num1, num2) { return num1 * num2;}

function divide(num1, num2) {return num1/num2;}

function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return mutiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

// TODO: add +/- functionality 
// break the first != '' and first '' into functions
// break clear, backspace into functions
// create a set operator function
// seperate */+- from equals and other operators

const calcContainer = document.querySelector('#calc-container');
let display = document.querySelector('#display');
let isLastButtonOperator = false;
let currentOperator = display;

function getOperand(tg) {
    second += tg.value;
    display.textContent = second;
    isLastButtonOperator = false;

}

function clearAll() {
    // clears operands, operator and screen
}
function backspace() {
    // backspace on the operand
}

function compute(target) {
    /*
    if first is empty:
        move second into first and display first
        set second to ''

    if first is not empty:
        first = operate(first, operator, second)
        second = ''
        display first
    update operator
    */
    if (first === '') {
        first = second;
        second = '';
        operator = target.value;
        isLastButtonOperator = true;
        display.textContent = first;
    } else {
        first = operate(parseFloat(first), operator, parseFloat(second));
        second = '';
        display.textContent = first;
        operator = target.value;
    }
}

calcContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('numeric')) {
        getOperand(target);
    }
    
    if(target.classList.contains('operator')) {
        currentOperator.classList.remove("active");
        currentOperator = target;
        currentOperator.classList.add("active");
        compute(target);
    }
});

/*
first = the result of previous operands
second = always the place for new operands

on click press numeric:
            second += button value  //moved to fuction
            display second

on click math operator:
    if last press was a math operator
        first = first
        operator = operator
        second = empty
        /// not sure about that, for now just prevent consequtive presses of operators
    if first not empty:
                first = operate(first, operator, second)  // this block should be a seperate function
                dislay first
                operator = this operator
                second = empty
    if first empty:
                first = second    // this block should be a different function
                second = empty
                operator = this operator
                display first


on click = operator:
    if first or second empty, do nothing
    else call operate
    store result in first, clear second

on click backspace operator:
    update second
*/