let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const operators = document.querySelectorAll(".operator");

operators.forEach( (operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    }); 
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    };
    
    calculationOperator = operator;
    currentNumber = '';
}

const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    }); 
});

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }
    else {
        currentNumber += number
    }
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result ='';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break
        case "*":
            result = prevNumber * currentNumber;
            break
        case "/":
            result = prevNumber / currentNumber;
            break
        default:
            result
    }
    currentNumber = result;
    calculationOperator = '';
}

const ac = document.querySelector(".all-clear");

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '';
}

ac.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
});

inputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return
    } 
    currentNumber += dot
}

const percent = document.querySelector(".percentage");

percentage.addEventListener('click', () => {
    currentNumber = '0';
    updateScreen(currentNumber);
});
