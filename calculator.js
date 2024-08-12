let first = '';
let second = '';
let operator = '';


function add(num1, num2) { return num1 + num2; }

function subtract(num1, num2) { return num1 - num2;}

function mutiply(num1, num2) { return num1 * num2;}

function divide(num1, num2) {return num1/num2;}

function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
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

const calcContainer = document.querySelector('#calc-container');
let display = document.querySelector('#display');
let isLastButtonOperator = false;
let currentOperator = display;

function operandHandler(tg) {
    second += tg.value;
    display.textContent = second;
    isLastButtonOperator = false;

}

function equalsHandler(tg) {
    if (first != '' && second != '' && operator != '') {
        second = operate(first, operator, second);
        first = '';
        display.textContent = second;
        console.log("pressed equal button");
    }
}

function clearAll() {
    // clears operands, operator and screen
}
function backspace() {
    // backspace on the operand
}

function operatorHandler(target) {
    if (first === '') {
        first = second;
        second = '';
        operator = target.value;
        isLastButtonOperator = true;
        display.textContent = second;
    }
    else if (second === '') {
        operator = target.value;
    } else {
        second = operate(first, operator, second);
        first = '';
        operator = target.value;
        display.textContent = second;
    }
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
    }
    console.log(`first: ${first}, second: ${second}, operator: ${operator}`);
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