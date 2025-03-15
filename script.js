/*  Add button functionality  */

const container = document.querySelector(".container");
let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
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
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    result = null;
    resultDisplayed = false;
}

function handleNumber(number) {
    // if (resultDisplayed) resetCalc();
    if (!currentOperator){
        if (displayValue === "0" || displayValue === 0 || resultDisplayed){
            displayValue = number;
            resultDisplayed = false;
        } else {
            displayValue += number;
        }
    } else {
        if((displayValue === firstNumber && secondNumber === null) || resultDisplayed){
            displayValue = number;
            secondNumber = number;
            resultDisplayed = false;
        } else {
            displayValue += number;
            secondNumber += number;
        }
    }

    //console.log(number);
    updateDisplay();
}

operators.forEach(op => {
    op.addEventListener('click', () => handleOperation(op.textContent));
})

function handleOperation(op){
    if (currentOperator && firstNumber !== null && secondNumber !== null){
        result = operate(Number(firstNumber), Number(secondNumber), currentOperator);
        displayValue = result;
        firstNumber = result;
        currentOperator = null;
        secondNumber = null;
    }

    currentOperator = op;
    firstNumber = displayValue;
    updateDisplay();
}

equals.addEventListener('click', () => {
    if (firstNumber !== null && secondNumber !== null && currentOperator){
        result = operate(Number(firstNumber), Number(secondNumber), currentOperator);
        displayValue = result;
        resultDisplayed = true;
        currentOperator = null;
        secondNumber = null;
        console.log(resultDisplayed);
        updateDisplay();
    } 
})

clearBtn.addEventListener("click", clearDisplay);

function clearDisplay(){
    displayValue = "0";
    firstNumber = null;
    secondNumber = null;
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