'use strict';

// Задача 1-1
function print(start, end) {
    if (start < end) {
        console.log(start);
        return print(start + 1, end);
    } else if (start === end) {
        console.log(start);
    } else {
        console.log('Число "start" повинно бути більше "end"');
    }
}

console.log(print(0, 10));


// // Задача 1-2
// function getFactorial(number) {
//     if (number <= 1) {
//         return 1;
//     } else {
//         return number * getFactorial(number - 1);
//     }
// }
//
// getFactorial(10);
//
//
// // Задача 1-3
// function createMultDigit(factor) {
//    function multFunc(digit) {
//        return factor * digit;
//    }
//    return multFunc;
// }
//
// const res1 = createMultDigit(2);
// const res2 = createMultDigit(3);
//
// console.log(res1(5));
// console.log(res1(10));
// console.log(res2(3));
// console.log(res2(10));
//
//
// // Задача 2
// const sales = {
//     name: "Jorge Clunie",
//     profit: 10000,
//     clients: [
//         {
//             name: "Harrison ford",
//             profit: 5000,
//             clients: [
//                 {
//                     name: "Mila Kunis",
//                     profit: 1000,
//                     clients: [
//                         {
//                             name: "Julia Roberts",
//                             profit: 2000,
//                             clients: [{name: "Richard Gir", profit: 3000, clients: []}],
//                         },
//                     ],
//                 },
//             ],
//         },
//         {
//             name: "Barak Obama",
//             profit: 7000,
//             clients: [{name: "Hilari Klinton", profit: 5000, clients: []}],
//         },
//         {
//             name: "Frodo",
//             profit: 3000,
//             clients: [
//                 {name: "Bilbo", profit: 2000, clients: []},
//                 {
//                     name: "Legolas",
//                     profit: 3000,
//                     clients: [{name: "Galadriel", profit: 1000, clients: []}],
//                 },
//             ],
//         },
//     ],
// };
//
// // Частне рішення задачі досить компактне і працює, але якщо в функцію попаде спочатку масив - все впаде, тому
// // закоментував загальне рішення.
// function profitSum(obj) {
//
//     sum += obj.profit;
//     if (obj.clients.length > 0) {
//         obj.clients.forEach((element) => {
//             profitSum(element);
//         });
//     }
//     return sum;
//
//     // if (Array.isArray(obj)) {
//     //     for (let element of obj) {
//     //         profitSum(element);
//     //     }
//     //     return sum;
//     // } else {
//     //     sum += obj.profit;
//     //     if (obj.clients.length > 0) {
//     //         profitSum(obj.clients);
//     //     }
//     //     return sum;
//     // }
// }
//
// let sum = 0;
// console.log(profitSum(sales));
//
//
// Задача 3
function operation(n) {
    return n * 2;
}

function memoization(func) {
    let cashedResult = {};

    function foo(digit) {
        if (digit in cashedResult) {
            return `cashed result: ${cashedResult[digit]}`;
        } else {
            cashedResult[digit] = func(digit);
            return `evaluated result: ${cashedResult[digit]}`;
        }
    }

    return foo;
}

const memOperation1 = memoization(operation);
const memOperation2 = memoization(operation);

console.log(memOperation2(3));
console.log(memOperation2(3));
console.log(memOperation2(3));

console.log(memOperation1(10));
console.log(memOperation1(10));
console.log(memOperation1(5));
console.log(memOperation2(3));
console.log(memOperation1(10));
