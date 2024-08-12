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
const calcContainer = document.querySelector('#calc-container');
let display = document.querySelector('#display');

calcContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('numeric')) {
        second += target.value;
        display.textContent = second;
    }
    
    if(target.classList.contains('operator')) {
        if (first != '') {
            first = operate(parseFloat(first), operator, parseFloat(second));
            console.log(`I'm in first if, first: ${first}, second: ${second}.`);
            second = '';
            display.textContent = first;
            console.log('button1 pressed: ' +target.textContent);
            if (['+', '-', '/', '*'].includes(target.textContent)) {
                operator = target.textContent;
                console.log('math1 operator ' + operator);
            }
            
        }
        if (first == '') {
            first = second;
            second = ''
            console.log(`I'm in second if, first: ${first}, second: ${second}.`);
            console.log('button2 pressed: ' +target.textContent);
            if (['+', '-', '/', '*'].includes(target.textContent)) {
                operator = target.textContent;
                console.log(`math2 operator saved ${operator}, first: ${first}, second: ${second}`);
            }
            display.textContent = first;
        }
    }
});

/*
first = the result of previous operands
second = always the place for new operands

when press numeric:
    second += button value
    display second

when press operator:
    if first not empty and operator not empty:
      first = operate(first, operator, second)
      dislay first
      operator = this operator
      second = empty
    if first empty:
      first = second
      second = empty
      operator = this operator
      display first
*/