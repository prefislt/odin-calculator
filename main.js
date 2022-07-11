
const mainDisplay = document.querySelector(".mainDisplay");
const infoDisplay = document.querySelector(".infoDisplay");
const buttons = document.querySelector(".buttons");

let infoValue, mainValue, input, operator;
let equalMode = false;

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
        case "x":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return console.log("ERROR! OPERATOR NOT FOUND");
    }
}

const button = () => {
    buttons.addEventListener("click", (e) => {
        if (e.target.matches("button")) {
            input = e.target.innerText;
        }
    })
}

const updateMainDisplay = (input) => {
    mainDisplay.innerText = input;
}

const updateInfoDisplay = (input) => {
    infoDisplay.innerText = input;
}

const addToMainDisplay = (input) => {
    mainDisplay.innerText += input;
}

button();

buttons.addEventListener("click", () => {

    if (input == "AC") {
        mainDisplay.innerText = "";
        infoDisplay.innerText = "";
        infoValue = "";
        mainValue = "";
        operator = undefined;
        equalMode = false;
    } else if (input == "=" && infoDisplay.innerText == "" && equalMode == false) {
        equalMode == true;
        return;
    } else if (equalMode == true && input == "=") {
        return;
    } else if (equalMode == true && Number(input) >= 0) {
        equalMode = false;
        mainDisplay.innerText = "";
        addToMainDisplay(input);
    } else if (Number(input) >= 0) {
        addToMainDisplay(input);
    } else if (input == "=") {
        mainValue = Number(mainDisplay.innerText);
        infoValue = Number(infoDisplay.innerText.slice(0, -2));
        mainDisplay.innerText = operate(operator,infoValue,mainValue);
        infoDisplay.innerText = "";
        operator = undefined;
        equalMode = true;
    } else if (operator != undefined) {
        mainValue = Number(mainDisplay.innerText);
        infoValue = Number(infoDisplay.innerText.slice(0, -2));
        mainDisplay.innerText = "";
        infoDisplay.innerText = operate(operator,infoValue,mainValue)+" "+input;
        operator = input;
    } else {
        infoDisplay.innerText = mainDisplay.innerText+" "+input;
        mainDisplay.innerText = "";
        operator = input;
    }
})
