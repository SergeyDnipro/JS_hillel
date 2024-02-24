'use strict';

// Задача 1
let current_int = parseInt(prompt('Задача 1. Введіть будь-яке число:'));
if (current_int >= 10) console.log(current_int);

// Задача 2
// Вирішив використати тернарний оператор
let password2 = prompt('Задача 2. Enter password:');
let console_msg = password2 === 'qwerty'
    ? 'Welcome aboard'
    : 'Password wrong';
console.log(console_msg);

// Задача 3
let msg = prompt('Задача 3. Введіть будь-яке повідомлення:');
if (msg === null) {
    console.log('Відміна вводу');
} else if (msg === '') {
    console.log('Ви нічого не написали');
} else {
    console.log(msg);
}

// Задача 4
let digit1 = parseInt(prompt('Задача 4. Введіть перше число для порівняння:'));
let digit2 = parseInt(prompt('Задача 4. Введіть друге число для порівняння:'));

if (digit1 > digit2) {
    console.log('Перше число більше');
} else if (digit1 < digit2) {
    console.log('Друге число більше');
} else {
    console.log('Числа рівні');
}

// Задача 5
let evenTest = parseInt(prompt('Задача 5. Введіть число, щоб узнати "парне" чи "не парне":'));
if (evenTest % 2 === 0) {
    console.log('Число парне');
} else {
    console.log('Число не парне');
}

// Задача 6
let password6 = parseInt(prompt('Задача 6. Введіть число, щоб узнати, чи входить воно в діапазон:'));
if (password6 >= 20 && password6 <= 80) {
    console.log('Число в діапазоні');
} else {
    console.log('Число НЕ і діапазоні');
}

// Задача 7
let password7 = parseInt(prompt('Задача 7. Введіть число, щоб узнати, чи входить воно в діапазон:'));
let min_limit = password7 >= 20;
let max_limit = password7 <= 80;
if (!min_limit || !max_limit) {
    console.log('Число НЕ в діапазоні...');
} else {
    console.log('Число в діапазоні');
}

// Задача 8
let month = parseInt(prompt('Задача 8. Введіть номер місяця:'));
if (month === 12 || (month >= 1 && month <= 2)) {
    console.log('Winter');
} else if (month >= 3 && month <= 5) {
    console.log('Spring');
} else if (month >= 6 && month <= 8) {
    console.log('Summer');
} else if (month >= 9 && month <= 11) {
    console.log('Fall');
} else {
    console.log('Incorrect number of month');
}

// Задача 9
let nickname = prompt('Задача 9. Введіть логін:');
if (nickname === 'admin') {
    let password9 = prompt('Задача 9. Введіть пароль:');
    if (password9 === 'the_master') {
        console.log('Welcome back, admin')
    } else if (password9 === null) {
        console.log('Canceled')
    } else {
        console.log('Wrong password')
    }
} else if (nickname === null) {
    console.log('Canceled')
} else {
    console.log('I don\'t know you')
}