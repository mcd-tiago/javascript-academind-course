const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseFloat(userInput.value);
}

function logOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescriptiopn = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescriptiopn);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult = currentResult + enteredNumber;
  logOutput('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult = currentResult - enteredNumber;
  logOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult = currentResult * enteredNumber;
  logOutput('*', initialResult, enteredNumber);
}

function divide(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult = currentResult / enteredNumber;
  logOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);