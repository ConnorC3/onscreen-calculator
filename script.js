/*  Add button functionality  */

const container = document.querySelector(".container");
let displayValue = "0";
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let result = null;
let resultDisplayed = false;

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
    number.addEventListener("click", () => 
        handleNumber(number.textContent)
    );
});

function resetCalc(){
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    result = null;
    resultDisplayed = false;
}

function handleNumber(number) {
    // if (resultDisplayed) resetCalc();
    if (currentOperator === null){
        if (displayValue === "0" || displayValue === 0 || resultDisplayed){
            displayValue = number;
            resultDisplayed = false;
        } else {
            displayValue += number;
        }
    } else {
        if(displayValue === firstOperand || resultDisplayed){
            displayValue = number;
            secondOperand = number;
            resultDisplayed = false;
        } else {
            displayValue += number;
            secondOperand += number;
        }
    }

    //console.log(number);
    updateDisplay();
}

operators.forEach(op => {
    op.addEventListener('click', () => handleOperation(op.textContent));
})

function handleOperation(op){
    if (currentOperator !== null){
        result = operate(Number(firstOperand), Number(secondOperand), currentOperator);
        displayValue = result;
        firstOperand = result;
        currentOperator = null;
        //resultDisplayed = true;
        //console.log(resultDisplayed);
    }
    currentOperator = op;
    firstOperand = displayValue;
    updateDisplay();
}

equals.addEventListener('click', () => {
    if (firstOperand !== null && secondOperand !== null){
        result = operate(Number(firstOperand), Number(secondOperand), currentOperator);
        displayValue = result;
        resultDisplayed = true;
        console.log(resultDisplayed);
        updateDisplay();
    } 
})

clearBtn.addEventListener("click", clearDisplay);

function clearDisplay(){
    displayValue = "0";
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    result = null;
    resultDisplayed = false;
    updateDisplay();
}


/*********************************/



/* MATH FUNCTIONS */

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
    if (b === 0){
        return "Error: Division by 0";
    } 
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