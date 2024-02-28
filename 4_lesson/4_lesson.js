'use strict';


// Задача 1-1
let digit1 = parseInt(prompt('Задача 4. Введіть перше число для порівняння:'));
let digit2 = parseInt(prompt('Задача 4. Введіть друге число для порівняння:'));

let console_msg = (digit1 > digit2)
    ? 'Перше число більше'
    : (digit1 === digit2)
        ? 'Числа рівні'
        : 'Друге число більше';

console.log(console_msg);


// Задача 1-2
let msg_1B = prompt('Задача 3. Введіть будь-яке повідомлення:');
switch (msg_1B) {
    case null:
        msg_1B = "Відміна вводу";
        break;
    case "":
        msg_1B = "Ви нічого не написали";
        break;
}
console.log(msg)


// Задача 1-3
let password6 = parseInt(prompt('Задача 6. Введіть число, щоб узнати, чи входить воно в діапазон:'));
const case_result = password6 >= 20 && password6 <= 80;
let msg_1C;
switch (case_result) {
    case true:
        msg_1C = 'Число в діапазоні';
        break;
    case false:
        msg_1C = 'Число НЕ в діапазоні';
}
console.log(msg_1C);


//  Задача 1-4
for (let i = 0; i < 11; i++) {
    console.log(i);
}

let loopVar = 0;
while (loopVar < 11) {
    console.log(loopVar);
    loopVar++;
}


// Задача 1-5
let min_limit = parseInt(prompt('Задача 4. Введіть перше число (менше) :'));
let max_limit = parseInt(prompt('Задача 4. Введіть друге число (більше) :'));

for (let i = min_limit; i <= max_limit; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

let loopVar1E = min_limit;
while (loopVar1E <= max_limit) {
    if (loopVar1E % 5 === 0) {
        console.log(loopVar1E);
    }
    loopVar1E++;
}


// Задача 1-6
for (let i = 1; i <= 10; i++) {
    console.log(`3 помножити на ${i} дорівнює ${3 * i}`);
}

let loopVar1F = 1;
while (loopVar1F <= 10) {
    console.log(`3 помножити на ${loopVar1F} дорівнює ${3 * loopVar1F}`);
    loopVar1F++;
}


// Задача 2
let count = 0;
for (let i = 1; i < 6; i++) {
    let currentDigit = parseInt(prompt(`Введіть ${i}-е число:`));
    count += currentDigit;
}
console.log(count);


// Задача 3
let userNumber = parseInt(prompt('Введіть число, факторіал якого бажаєте отримати:'));
let factorialEvaluated = 1;

while (userNumber) {
    factorialEvaluated *= userNumber;
    userNumber--;
}
console.log(factorialEvaluated);

// Рекурентне рішення. Мені здається більш елегантне, хоча я розумію на курсі це ще не проходили.
function getFactorial(number) {
    if (number <= 1) {
        return 1;
    } else {
        return number * getFactorial(number - 1);
    }
}
console.log(getFactorial(10))


// Задача 4
let colsCount = parseInt(prompt('Введіть кількість рядків:'));
let asterixOne = ' *';
let asterixResult = '*';

// рівнобедрений трикутник
for (let i = colsCount; i !== 0; i--) {
    console.log(' '.repeat(i) + asterixResult);
    asterixResult += asterixOne;
}
// Звичайний трикутник
for (let i = 1; i < colsCount + 1; i++) {
    console.log(asterixOne.repeat(i));
}
