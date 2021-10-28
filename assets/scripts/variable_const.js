
// let age = 30;
// alert(age);

// alert(40);


const defaultResult = 0;
let currentResult = defaultResult;


function add(num1, num2) {
    const result = num1 + num2;
    // alert('The result is' + result);
    return result;
}

currentResult = add(1, 2);


// currentResult = (currentResult + 10) * 3 / 2 - 1;
// currentResult = additionResult;

// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
// let calculationDescription = '('+ currentResult + ' + 10) * 3 / 2 - 1';
// let calculationDescription = 'Hi there';
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// let errorMessge = "Ann error" +
//                     "occurred";

outputResult(currentResult, calculationDescription);
// outputResult(currentResult, errorMessge);