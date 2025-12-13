let firstDigit = '';
let secondDigit = '';
let operator = undefined;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".btn");
const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number")
const equalButton = document.querySelector(".equalBtn");
const clearButton = document.querySelector(".clearBtn");
const deleteButton = document.querySelector(".deleteBtn")

function numberBtn(){
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            return display.innerText = button.innerText;
        })
    });
} 

function operatorBtn(){
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            return display.innerText = button.innerText;
        });
    });
}

function add(n1, n2){
    return n1 + n2;
}

function subtract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

function convertOperator(){
    if (getDigit() === 'x'){
        getDigit() = '*';
    } else if (getDigit() === '÷'){
        getDigit() = '/';
    }
}

function operate(operator, n1, n2){
    n1 = Number(n1);
    n2 = Number(n2);

    switch(operator){
        case '+':
            return add(n1, n2)
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        default:
            return;
    }
}