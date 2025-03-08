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
const numbers = container.querySelectorAll(".number");
const display = container.querySelector(".display");

numbers.forEach(number => {
    

    number.addEventListener("click", () => {
        display.textContent = number.textContent;
    });

})