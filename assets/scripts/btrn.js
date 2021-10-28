
const defaultResult = 0;
let currentResult = defaultResult;


function getUserInput() {
    return parseInt(userInput.value)
}


function createAndWriteOutput(operator, resultBefore, calcNumber){
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

// function add() {
//     const enterNum = getUserInput();
//     const calcDescription = `${currentResult} + ${enterNum}`;
//     currentResult = currentResult + parseInt(userInput.value);
//     outputResult(currentResult, calcDescription);
//     // alert('The result is' + result);
//     // return result;
// }


function add() {
    const enterNum = getUserInput();
    const initialNum = currentResult;
    currentResult = currentResult + enterNum;
    createAndWriteOutput('+', initialNum, enterNum);
    // alert('The result is' + result);
    // return result;
}




function subtract() {
    const enterNum = getUserInput();
    const initialNum = currentResult;
    currentResult = currentResult - enterNum;
    createAndWriteOutput('-', initialNum, enterNum);
}


function multiply() {
    const enterNum = getUserInput();
    const initialNum = currentResult;
    currentResult = currentResult * enterNum;
    createAndWriteOutput('*', initialNum, enterNum);
}


function divide() {
    const enterNum = getUserInput();
    const initialNum = currentResult;
    currentResult = currentResult / enterNum;
    createAndWriteOutput('/', initialNum, enterNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

