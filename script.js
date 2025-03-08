function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, op){
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if (b === 0){
                return "Error: Division by 0";
            } else {
                return divide(a, b);
            }
        default:
            alert("Invalid input");
            return;
    }
}

/*  Add button functionality  */

const container = document.querySelector(".container");
let displayValue = "0";
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;

updateDisplay();

// get buttons
const numbers = container.querySelectorAll(".number");
const operators = container.querySelectorAll(".operator");
const equals = container.querySelector(".equals");
const clearBtn = container.querySelector(".clear");



function updateDisplay(){
    const display = container.querySelector(".display");
    display.textContent = displayValue;
}

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (displayValue === "0" || displayValue === 0){
            displayValue = number.textContent;
        } else {
            displayValue += number.textContent;
        }
        updateDisplay();
    });
});

clearBtn.addEventListener("click", () => {
    displayValue = "0";
    updateDisplay();
})