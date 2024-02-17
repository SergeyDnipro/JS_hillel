// Задача 1
let age = 40;
let name = "Sergey";

console.log(age)
console.log(name)

name = "Sergey Babich"
console.log(name)

// Задача 2
msg = "Мене звати " + name + ", мені " + age + " років."
alert(msg)

// Задача 3
age = prompt('Скільки вам років: ')
name = prompt('Ваше повне ім\'я та прізвище')

msg = `Мене звати ${name}, мені ${age} років.`
alert(msg)

// Задача 4
let number1, number2;
number1 = parseInt(prompt('Введіть перше число'))
number2 = parseInt(prompt('Введіть друге число'))

let sum = number1 + number2
let sub = number1 - number2
let mul = number1 * number2
let div = number1 / number2

console.log(sum, sub, mul, div)