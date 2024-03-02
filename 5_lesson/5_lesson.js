'use strict';


// Задача 1
function getSum(number1, number2) {
    return number1 + number2;
}

function getMultBy5(number) {
    let result = number * 5;
    console.log(`5 * ${number} = ${result}`);
}

function getMaxValue(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

// Задача 2
function getPow(base, power) {
    if (base === undefined || power === undefined) {
        return 9;
    }
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= base;
    }
    return result;
}
console.log(getPow(2, 5));

// Задача 3
function getSumOrConcatination(value1, value2) {
    if (value1 === undefined || value2 === undefined) {
        return 30;
    } else if (typeof value1 === 'string' || typeof value2 === 'string') {
        console.log(`Результат конкатенації: ${value1 + value2}`);
    } else if (typeof value1 === 'number' && typeof value2 === 'number') {
        console.log(`Результат суми: ${value1 + value2}`);
    } else {
        console.log("Некоректні аргументи");
    }
}
getSumOrConcatination(true, NaN);

// Задача 4
function getFibonachi(number) {
    let previousResult1 = 1;
    let previousResult2 = 1;
    let result;
    if (number <= 2) {
        return previousResult1;
    } else {
        for (let i = 3; i <= number; i++) {
            result = previousResult1 + previousResult2;
            previousResult1 = previousResult2;
            previousResult2 = result;
        }
        return result;
    }
}
console.log(getFibonachi(100));

// Також був визначений базовий випадок і задача вирішена за допомогою рекурсіі.
function getFibonachiRecursion(number) {
    if (number <= 2) {
        return 1;
    } else {
        return getFibonachiRecursion(number - 1) + getFibonachiRecursion(number - 2);
    }
}
console.log(getFibonachiRecursion(7));
