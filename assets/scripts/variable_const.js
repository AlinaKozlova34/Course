
// let age = 30;
// alert(age);

// alert(40);


const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
// let calculationDescription = '('+ currentResult + ' + 10) * 3 / 2 - 1';
// let calculationDescription = 'Hi there';
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// let errorMessge = "Ann error" +
//                     "occurred";

outputResult(currentResult, calculationDescription);
// outputResult(currentResult, errorMessge);