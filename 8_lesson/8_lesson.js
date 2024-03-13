'use strict';


// Задача 1-1
let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];
array.forEach((element) => {
    console.log(element);
})


// 1 - 2
let arrayMult5 = array.map((element) => {
    return element * 5;
})
console.log(arrayMult5);


// 1 - 3
function sort(rawArray) {
    rawArray.sort((a, b) => {
        return a - b;
    })
    return rawArray;
}

function sortReverse(rawArray) {
    rawArray.sort((a, b) => {
        return b - a; // Або 'a - b' та потім використати reverse на отриманий масив.
    })
    return rawArray;
}

console.log(sort(arrayMult5));
console.log(sortReverse(arrayMult5));


// 1 - 4
let sumArray = array.reduce((sum, element) => sum += element, 0);
console.log(sumArray);


// Задача 2
function sortCarArray(rawArray) {
    rawArray.sort((a, b) => {
        return a.length - b.length;
    });
    return rawArray;
}

let carArray = ['Mersedes', 'Audi', 'BMW', 'VolksWagen'];
console.log(sortCarArray(carArray));


// Задача 3
function unique(rawArray) {
    let newArray = [];
    rawArray.forEach((element) => {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    })
    return newArray;
}

let strings = [
    "Привіт", "Світ", "Привіт", "Світ",
    "Привіт", "Привіт", "Світ", "Світ", ":-O"
];
console.log(unique(strings));

//  Задача 4
function mostCommonDigit(digitArray) {
    let totalValuesObj = digitArray.reduce((newObj, element) => {
        newObj[element] = (newObj[element] || 0) + 1;
        return newObj;
    }, {});

    let [maxKey, maxValue] = Object.entries(totalValuesObj)[0]; // Можливо просто привоїти їм 'null' та '-Infinity'
    for (let currentKey in totalValuesObj) {
        let currentValue = totalValuesObj[currentKey];
        if (currentValue > maxValue || (currentValue === maxValue && parseInt(currentKey) > parseInt(maxKey))) {
            maxValue = currentValue;
            maxKey = currentKey;
        }
    }
    return maxKey;
}

console.log(mostCommonDigit([12, 10, 8, 12, 7, 6, 4, 10, 12, 10, 10]));
