
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserInput() {
    return parseInt(userInput.value)
}


function createAndWriteOutput(operator, resultBefore, calcNumber){
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}




function writeToLog (
    operationIdentifier, 
    prevResult, 
    operationNumver,
    newResult ) {
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumver,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries);
        
}

// function add() {
//     const enterNum = getUserInput();
//     const calcDescription = `${currentResult} + ${enterNum}`;
//     currentResult = currentResult + parseInt(userInput.value);
//     outputResult(currentResult, calcDescription);
//     // alert('The result is' + result);
//     // return result;
// }


// function add() {
//     const enterNum = getUserInput();
//     const initialNum = currentResult;
//     currentResult = currentResult + enterNum;
//     createAndWriteOutput('+', initialNum, enterNum);
//     // alert('The result is' + result);
//     // return result;
// }


function add() {
        const enterNum = getUserInput();
        const initialNum = currentResult;
        currentResult += enterNum;
        // currentResult--;
        // currentResult++;
        // ++currentResult;
        // --currentResult;
        // alert(++currentResult)
        createAndWriteOutput('+', initialNum, enterNum);
        // const logEntry = {
        //     operation: 'ADD',
        //     prevResult: initialNum,
        //     number: enterNum,
        //     result: currentResult
        // };
        // logEntries.push(logEntry);
        // comsole.log(logEntry.operation);
        // console.log(logEntries[1]);
        writeToLog('ADD', initialNum, enterNum, currentResult);
    }




function subtract() {
    const enterNum = getUserInput();
    const initialNum = currentResult;
    // currentResult = currentResult - enterNum;
    currentResult -= enterNum;
    createAndWriteOutput('-', initialNum, enterNum);
    writeToLog('SUBTRACT', initialNum, enterNum, currentResult);
}


function multiply() {
    const enterNum = getUserInput();
    const initialNum = currentResult;
    currentResult = currentResult * enterNum;
    createAndWriteOutput('*', initialNum, enterNum);
    writeToLog('MULTYPLY', initialNum, enterNum, currentResult);
}


function divide() {
    const enterNum = getUserInput();
    const initialNum = currentResult;
    currentResult = currentResult / enterNum;
    createAndWriteOutput('/', initialNum, enterNum);
    writeToLog('DIVIDE', initialNum, enterNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

