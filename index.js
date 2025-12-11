const add = function(n1, n2){
    return n1 + n2;
}

const subtract = function(n1, n2){
    return n1 - n2;
}

const multiply = function(n1, n2){
    return n1 * n2;
}

const divide = function(n1, n2){
    return n1 / n2;
}

let firstDigit;
let secondDigit;
let thirdDigit;

const operate = function(operator, n1, n2){
    if (operator === '+') add(n1, n2);
    if (operator === '-') subtract(n1, n2);
    if (operator === '*') multiply(n1, n2);
    if (operator === '/') divide(n1, n2);
}