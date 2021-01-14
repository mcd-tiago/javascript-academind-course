/*
Tiago Macedo Cesar - 15/01/2021
1st Project of The Javascript Complete Guide from Academind
Unconventional Calculator
*/

const defaultResult = 0;
let currentResult = defaultResult;


//Function to get input
function getUserInput() {
  return parseFloat(userInput.value);
}

//Function to log the operation
function logOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescriptiopn = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescriptiopn);
}

//Addition
function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult += enteredNumber;
  logOutput('+', initialResult, enteredNumber);
}

//Subtraction
function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult -= enteredNumber;
  logOutput('-', initialResult, enteredNumber);
}

//Multiplication
function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult *= enteredNumber;
  logOutput('*', initialResult, enteredNumber);
}

//Division
function divide(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult /= enteredNumber;
  logOutput('/', initialResult, enteredNumber);
}

//Logic to HTML buttons and what functions each should execute 
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);