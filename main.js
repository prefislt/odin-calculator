
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

let input = "";

// Basic math functions
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const operate = (operator,a,b) => {
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return console.log("ERROR! OPERATOR NOT FOUND");
    }
}

const listenToButtons = () => {
    buttons.addEventListener("click", (e) => {
        if (e.target.matches("button")) {
            input = e.target.innerText;
        }
    })
}

const addToDisplay = (input) => {
    display.innerText += input;
}

listenToButtons();

buttons.addEventListener("click", () => {
    if (input == "C") {
        display.innerHTML = "";
    } else {
        addToDisplay(input);
    }
})

