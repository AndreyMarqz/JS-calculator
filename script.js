let currentNumber = "";
let previousNumber = "";
let operator = undefined;

const outputDisplay = document.querySelector(".output");
const display = document.querySelector(".display");
const digits = document.querySelectorAll(".btn");
const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number");
const equalButton = document.querySelector(".equalBtn");
const clearButton = document.querySelector(".clearBtn");
const deleteButton = document.querySelector(".deleteBtn");
const previousDisplay = document.querySelector(".previousDisplay");

function setUpNumberButton(){
    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.innerText === '.' && currentNumber.includes('.')) return;
            currentNumber += button.innerText;

            if (operator !== undefined) {
                display.innerText = previousNumber + " " + operator + " " + currentNumber;
            } else {
                display.innerText = currentNumber;
            }
        });
    });
}

function setUpOperatorButton(){
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (currentNumber === "") return;

            if (previousNumber !== "" && operator !== undefined) {
                const result = operate(operator, previousNumber, currentNumber);
                previousNumber = result;
            } else {
                previousNumber = currentNumber;
            }

            operator = button.innerText;
            currentNumber = "";
            
            display.innerText = previousNumber + " " + operator;
            previousDisplay.innerText = "";
        });
    });
}

equalButton.addEventListener("click", () => {
    if (currentNumber === "" || previousNumber === "" || operator === undefined) return;

    let result = operate(operator, previousNumber, currentNumber);

    previousDisplay.innerText = previousNumber + " " + operator + " " + currentNumber + " =";
    display.innerText = result;
    currentNumber = result;
    previousNumber = "";
    operator = undefined;
});



deleteButton.addEventListener("click", () => {
    display.innerText = "";
    previousDisplay.innerText = "";
    currentNumber = "";
    previousNumber = "";
    operator = undefined;
});

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(operator, n1, n2) {
    n1 = Number(n1);
    n2 = Number(n2);

    switch (operator) {
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "x":
            return multiply(n1, n2);
        case "÷":
            return divide(n1, n2);
        default:
            return;
    }
}

setUpNumberButton();
setUpOperatorButton();