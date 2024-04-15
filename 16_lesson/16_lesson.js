'use strict';


// Задача 1-1
// const promise1 = new Promise((resolve, reject) => {
//     resolve('Hello world');
// });
//
// promise1.then((value) => {
//     console.log(value);
// });
//

Promise.resolve().then(() => {console.log("Hello World")});


// Задача 1-2
function delayedMsg(msg) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(msg);
        }, 2000);
    }).then((result) => {
        console.log(result)
    });
}

delayedMsg('Hello world');


// Задача 1-3
const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const myError = new Error('My error');
        reject(myError);
    });
});

errorPromise.catch(console.error);


// Задача 1-4
function makePromise(msg, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(msg);
        }, delay)
    });
}
function showResults(...args) {
    let promisesResults = Promise.allSettled(args);
    promisesResults.then((results) => {
        results.forEach((result) => {
            console.log(result.value);
        })
    })
}

let prom1 = makePromise('Promise 1', 1000);
let prom2 = makePromise('Promise 2', 100);
let prom3 = makePromise('Promise 3', 500);

showResults(prom1, prom2, prom3);


// Задача 1-5
function showFirst(...args) {
    Promise.any(args).then(console.log);
}

showFirst(prom1, prom2, prom3);


// Задача 2
function delay(ms) {
    const myPromise = new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            console.log(myPromise);
        }, ms);
    }));
    console.log(myPromise);
    return myPromise;
}

delay(5000)
    .then((time) => alert(`Виконалось через ${time / 1000} секунд`))
    .catch(console.error);


// Задача 3
function callbackFunction(error, result) {
    if (error !== null) return error;
    return `результат операції ${result}`
}

function callback_BasedFunction(arg1, arg2, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = arg1 + arg2;
            // Імітуємо важку операцію
            for (let i = 0; i < 1000000000; i++) {}
            if (result % 2 !== 0) {
                resolve(callback(null, result));
            }
            reject(callback(new Error('Result is not odd!'), null));
        })
    })
}

console.log("start");

callback_BasedFunction(3150, 121, callbackFunction)
    .then(console.log)
    .catch(console.error);

console.log("end");


// Задача 4
const cache = {};
function getFibonachiRecursion(number) {
    if (number <= 2) return 1;
    cache[number] = cache[number] || getFibonachiRecursion(number - 1) + getFibonachiRecursion(number - 2);
    return cache[number];
}

function fibonachiAsync(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            let result = getFibonachiRecursion(number);
            resolve(result);
        });
    })
}

console.log("start");

fibonachiAsync(40).then(console.log);

console.log("finish");
