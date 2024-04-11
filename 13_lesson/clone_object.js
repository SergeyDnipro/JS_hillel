'use strict';


// Рекурсивна функцію, котра копіює об'єкт з вкладеними об'єктами і масивами і міксами з них. Звісно працює з деякими
// обмеженнями і часу в мене зараз небагато для рефакторінга, але працює... навіть трохи здивувався, коли вийшло.

// Клонування методу.
function processMethod(obj) {
    let funcCode = obj.toString();
    return new Function("return " + funcCode)();
}

// Функція клонування MAP. Якщо "значення ключа" не є прімітивом, то запускаються функції обробки об'єктів різних
// типів даних.
function processMap(obj) {
    let tempArray = [];
    let key, value;
    for ([key, value] of obj.entries()) {
        if (typeof value !== 'object') {
            tempArray.push([key, value]);
        } else if (typeof value === 'function') {
            tempArray.push([key, processMethod(value)]);
        } else if (value instanceof Map) {
            tempArray.push([key, processMap(value)]);
        } else if (value instanceof Set) {
            tempArray.push([key, processSet(value)]);
        } else if (Array.isArray(value)) {
            tempArray.push([key, processArray(value)]);
        } else {
            tempArray.push([key, cloneObj(value)]);
        }
    }
    return new Map(tempArray);
}

// Функція клонування SET.
function processSet(obj) {
    let tempArray = [];
    obj.forEach((element) => {
        if (typeof element !== 'object') {
            tempArray.push(element);
        } else {
            tempArray.push(cloneObj(element));
        }
    });
    return new Set(tempArray);
}

// Функція клонування Array. Якщо "item" не є прімітивом, то запускаються функції обробки об'єктів різних типів даних.
function processArray(obj) {
    let newArr = [];
    obj.forEach((item) => {
        if (Array.isArray(item)) {
            newArr.push(processArray(item));
        } else if (item instanceof Set) {
            newArr.push(processSet(item));
        } else if (item instanceof Map) {
            newArr.push(processMap(item));
        } else if (typeof item === 'function') {
            newArr.push(processMethod(item));
        } else if (typeof item === 'object') {
            newArr.push(cloneObj(item));
        } else {
            newArr.push(item);
        }
    })
    return newArr;
}

// Перевірка на різні типи даних в значеннях ключів орігінального об'єкта. Клонування примітивних типів даних. Виклик
// функцій для обробки даних, а також виклик самої себе для обробки вкладених об'єктів
function cloneObj(obj) {
    let tempObj = {};

    for (let element in obj) {
        if (Array.isArray(obj)) {
            return processArray(obj);

        } else if (typeof obj[element] !== 'object') {
            tempObj[element] = obj[element];

        } else if (typeof obj[element] === 'function') {
            tempObj[element] = processMethod(obj[element]);

        } else if (obj[element] instanceof Set) {
            tempObj[element] = processSet(obj[element]);

        } else if (obj[element] instanceof Map) {
            tempObj[element] = processMap(obj[element]);
        } else {
            tempObj[element] = cloneObj(obj[element]);
        }
    }
    return tempObj;
}

function myFoo() {
    console.log('Original function');
}

let objSet = new Set([1, 3, 4, 1, 6, true, true, 3, 10])
let objMap = new Map([['name', 'Sergey'], ['country', 'Ukraine'], ['languages', {'english': 8, 'ukrainian': 10}]])

const obj1 = {
    symbols: [23, true, [5, 3], ['a', [-10, -20]], objSet],
    country: {title: 'Ukraine', cities: {capital: 'Kiev', others: ['Dnipro', objMap, 'Lviv'], myMethod: myFoo}},
    my_set: objSet,
    my_map: objMap,
};

const obj2 = cloneObj(obj1);

console.log(obj1);
console.log(obj2);
