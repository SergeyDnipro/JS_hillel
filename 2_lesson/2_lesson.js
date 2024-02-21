// Задача 1
let number1, number2;
number1 = parseInt(prompt('Введіть перше число'));
number2 = parseInt(prompt('Введіть друге число'));

let rem = number1 % number2;
let pow = number1 ** number2;

let msg_rem = `Залишок від ділення ${number1}, на ${number2} дорівнює ${rem}.`;
let msg_pow = `Результат зведеня ${number1}, у ступінь ${number2} дорівнює ${pow}.`;

console.log(msg_rem);
console.log(msg_pow);

// Задача 2
let num = 10;

num += 5;
num -= 2;
num *= 2;

++num; ++num; ++num;

console.log(num);

// Задача 3
console.log(10 % 2);
console.log(10 % 3);
console.log(8 % 3);

// Задача 4
let age = parseInt(prompt('Введіть ваш вік:'));
let response;

response = age >= 18;

console.log(response);

// Задача 5
let x = +prompt('Введите x:');
let y = +prompt('Введите y:');

[x, y] = [y, x];

console.log(x);
console.log(y);
