/*
Tiago Macedo Cesar - 15/01/2021
1st Project of The Javascript Complete Guide from Academind
Unconventional Calculator
*/

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //Array


//Function to get input
function getUserInput() {
  return parseFloat(userInput.value);
}

//Function to log the operation
function logOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

//Function to write to log
function wrtiteToLog(oprId, prevResult, oprNumbr, newResult){
  
  //object construction to log the calculations
  const logEntry = {
    operation: oprId,
    previousResult: prevResult,
    number: oprNumbr,
    result: newResult,
  };

  //array structure study
  logEntries.push(logEntry);
  console.log(logEntries);
}

//Addition
function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult += enteredNumber;
  logOutput('+', initialResult, enteredNumber);

  wrtiteToLog('ADD', initialResult, enteredNumber, currentResult);
}

//Subtraction
function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult -= enteredNumber;
  logOutput('-', initialResult, enteredNumber);
  wrtiteToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

//Multiplication
function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult *= enteredNumber;
  logOutput('*', initialResult, enteredNumber);
  wrtiteToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

//Division
function divide(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult /= enteredNumber;
  logOutput('/', initialResult, enteredNumber);
  wrtiteToLog('DIVISION', initialResult, enteredNumber, currentResult);
}

//Logic to HTML buttons and what functions each should execute 
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);