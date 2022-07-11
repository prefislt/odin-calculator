
const mainDisplay = document.querySelector(".mainDisplay");
const infoDisplay = document.querySelector(".infoDisplay");
const buttons = document.querySelector(".buttons");

let infoValue, mainValue, input, operator;
let equalMode = false;

const operate = (operator,a,b) => {
    switch (operator) {
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "x":
            return a*b;
        case "/":
            return a/b;
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

const addToMainDisplay = (input) => {
    if (mainDisplay.innerText.length < 10) {
        mainDisplay.innerText += input;
    } else { return; }
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

        if ((operator == "/" && infoValue == 0) || (operator == "/" && mainValue == 0)) {
            mainDisplay.innerText = "LOL";
            infoDisplay.innerText = "";
            operator = undefined;
            equalMode = true;
            return;
        }

        let sum = operate(operator,infoValue,mainValue);
        if (sum%1 == 0) {
            mainDisplay.innerText = sum;
        } else { mainDisplay.innerText = sum.toFixed(2); }
        infoDisplay.innerText = "";
        operator = undefined;
        equalMode = true;
    } else if (operator != undefined) {
        if (equalMode == false) {
            mainValue = Number(mainDisplay.innerText);
            infoValue = Number(infoDisplay.innerText.slice(0, -2));
            mainDisplay.innerText = "";
            if ((operator == "/" && infoValue == 0) || (operator == "/" && mainValue == 0)) {
                infoDisplay.innerText = "";
                mainDisplay.innerText = "LOL";
                operator = undefined;
                equalMode = true;
                return;
            }
            let sum = operate(operator,infoValue,mainValue);
            if (sum%1 == 0) {
                infoDisplay.innerText = sum+" "+input;
            } else { infoDisplay.innerText = sum.toFixed(2)+" "+input; }
            operator = input;
        } else { return; }
    } else {
        infoDisplay.innerText = mainDisplay.innerText+" "+input;
        mainDisplay.innerText = "";
        operator = input;
        equalMode = true;
    }
})
