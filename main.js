//Creating calculator operations

//Operators functions

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

//Operate function
function operate(a, operator, b) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  }
}

function getNumbers(a) {
  return a;
}

//Populate numbers on the screen

const keys = document.querySelectorAll("button");
const screenCalculator = document.querySelector(".screen");
let isEqualPressed = false;
let flagClick = 0;
let userInput = '';
let operator = '';
let a = 0;
let b = 0;

keys.forEach((button) => {
  button.addEventListener("click", () => {
    if (flagClick == 0 && button.textContent != 'AC'){
        screenCalculator.textContent = '';
        screenCalculator.textContent = screenCalculator.textContent + button.textContent;
        userInput = userInput + button.textContent;
        isEqualPressed = false;
    }
    else if (flagClick <= 8 && button.textContent != 'AC'){ //max space in the screen
        screenCalculator.textContent = screenCalculator.textContent + button.textContent;
        userInput = userInput + button.textContent;
        if (button.textContent == '+' || button.textContent == '-' || button.textContent == '*' || button.textContent == '/' ){
            operator = button.textContent.slice(-1); //gets the operator symbol
            userInput = userInput.slice(0,-1);
            a = userInput;
            userInput = ''
        }
        else if (button.textContent == '=' && isEqualPressed == false && operator != ''){
            b = userInput.slice(0,-1)
            userInput = userInput.slice(0,-1);
            screenCalculator.textContent = screenCalculator.textContent.slice(0,-1);
            isEqualPressed = true
            screenCalculator.textContent = operate(a,operator,b);
            flagClick = -1;
            userInput = '';
        }
        else if (button.textContent == '=' && operator == ''){
            userInput = userInput.slice(0,-1);
            screenCalculator.textContent = userInput;
            console.log('this is user '+ userInput);
        }
    }
    else if (button.textContent == 'AC'){
        flagClick = -1;
        screenCalculator.textContent = 0;
        userInput = '';
    }
    flagClick = flagClick + 1;
    console.log('bandera '+flagClick)
    console.log(userInput)

  });
});



// console.log(getNumbers());
// while (button != '')
