let currentNumber = "";
let previousNumber = "";
let operator = undefined;
let justCalculated = false;

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
            if (justCalculated) {
                currentNumber = "";
                previousNumber = "";
                operator = undefined;
                previousDisplay.innerText = "";
                justCalculated = false;
            }
            
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
            justCalculated = false;

            if (currentNumber === "" && operator !== undefined && previousNumber !== ""){
                operator = button.innerText;
                display.innerText = previousNumber + " " + operator;
                return;
            }

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

function setEqualButton(){
    equalButton.addEventListener("click", () => {
        if (currentNumber === "" || previousNumber === "" || operator === undefined) return;

        if (currentNumber === '0' && operator === '÷'){
            alert("It is not possible to divide by 0!");
            return clearCalculator();
        }

        let result = operate(operator, previousNumber, currentNumber);

        previousDisplay.innerText = previousNumber + " " + operator + " " + currentNumber + " =";
        display.innerText = result;
        currentNumber = result;
        previousNumber = "";
        operator = undefined;
        justCalculated = true;
    });
}

function clearCalculator(){
    display.innerText = "";
    previousDisplay.innerText = "";
    currentNumber = "";
    previousNumber = "";
    operator = undefined;
}

function deleteAll(){
    deleteButton.addEventListener("click", () => {
        display.innerText = "";
        previousDisplay.innerText = "";
        currentNumber = "";
        previousNumber = "";
        operator = undefined;
        justCalculated = false;
    });
}

function clear(){
    clearButton.addEventListener('click', () => {
        if (justCalculated) return;

        if (currentNumber !== ""){
            currentNumber = currentNumber.slice(0, -1);
        
            if (operator !== undefined){
                display.innerText = previousNumber + " " + operator + " " + currentNumber;
            } else {
                display.innerText = currentNumber;
            }
        }

        else if (operator !== undefined){
            operator = undefined;
            display.innerText = previousNumber;
        }

        else if (previousNumber !== ""){
            previousNumber = previousNumber.slice(0, -1);
            display.innerText = previousNumber;
        }

        else {
            display.innerText = "";
        }

        justCalculated = false;
        
    });
}

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
setEqualButton();
deleteAll();
clear();