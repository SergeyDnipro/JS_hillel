'use strict';


// Задача 1-1
function capitalize(string) {
    const firstLetter = string.at(0).toUpperCase();
    const restOfSequence = string.slice(1).toLowerCase();
    return firstLetter.concat(restOfSequence);
}

console.log(capitalize("hEllo WorlD!"))


// Задача 1-2
function reverseStringArray(string) {
    let temporaryReverseArray = string.split('').reverse();
    return temporaryReverseArray.join('');
}

console.log(reverseStringArray("Hello world!"));

// Рішення зі стрічками.
function reverseString(string) {
    let new_string = '';
    for (let i=string.length - 1; i >= 0; i--) {
        new_string += string.at(i);
    }
    return new_string;
}
console.log(reverseString("Hello world!"));


// Задача 1-3
function convertToBinary(number) {
    return number.toString(2);
}

console.log(convertToBinary(15));


// Задача 1-4
function generateRandomFloat(digits) {
    return (Math.random() * 100).toFixed(digits);
}

console.log(generateRandomFloat(4));


// Задача 2-1
function isPalindrome(string) {
    const stringClear = string.toLowerCase().replaceAll(' ', '');
    const stringHalfLength = stringClear.length / 2;
    if (string.length === 1) {
        return true;
    } else {
        for (let i = 0; i < stringHalfLength; i++) {
            if (stringClear.at(i) !== stringClear.at(-i - 1)) {
                return false;
            }
        }
        return true;
    }
}

console.log(isPalindrome('І розморозь зором зорі'));


// Задача 3
function sumOfNumbers(number) {
    let count = 0;
    let numberStringType = number.toString();
    for (let i = 0; i < numberStringType.length; i++) {
        count += parseInt(numberStringType.at(i));
    }
    return count;
}

console.log(sumOfNumbers(122));


// Задача 4
function generateNumberInLimit(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

console.log(generateNumberInLimit(10, 20));


// Задача 5
// Зробив двома методами (масиви та стрічки). На мій погляд с масивами більш очевидне і "легке" рішення.
// Не треба ітерувати по всій довжині стрічки і потім склеювати.
function toCamelCaseMainMethod(snake_case_string) {
    let temporaryArray = snake_case_string.split('_');
    for (let i = 1; i < temporaryArray.length; i++) {
        temporaryArray[i] = capitalize(temporaryArray[i]);
    }
    return temporaryArray.join('');
}

console.log(toCamelCaseMainMethod('current_user'));

function toCamelCaseStringMethod(snake_case_string) {
    for (let i = 0; i < snake_case_string.length; i++) {
        if (snake_case_string.at(i) === '_') {
            snake_case_string = snake_case_string.slice(0, i).concat(capitalize(snake_case_string.slice(i + 1)));
        }
    }
    return snake_case_string;
}

console.log(toCamelCaseStringMethod('current_user'));
