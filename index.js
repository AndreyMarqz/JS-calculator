let firstDigit = '';
let operator = null;
let secondDigit = '';

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".btn");

function getDigit(){
    digits.forEach(button => {
        button.addEventListener('click', () => {
            const clickedNumber = button.innerText;

            if(display.innerText === '0'){
                return display.innerText = clickedNumber;
            } else {
                return display.innerText += clickedNumber;
            }
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

function operate(operator, n1, n2){
    n1 = Number(n1);
    n2 = Number(n2);

    switch(operator){
        case '+':
            return add(n1, n2);

        case '-':
            return subtract(n1, n2);

        case '*':
            return multiply(n1, n2);

        case '/':
            return divide(n1, n2);

        default:
            return null;
    }
}