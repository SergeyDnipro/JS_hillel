'use strict';


// // Задача 1
// const actor = {};
// actor.name = 'Robert';
// actor.surname = 'Downey';
//
// actor.name = 'John';
// delete actor.name;
// console.log(actor);
//
//
// // Задача 2
// let phone = prompt('Введіть номер телефону:');
//
// const person = {
//     firstName: 'Sergey',
//     lastName: 'Babych'
// }
// const contacts = {
//     phone: phone,
//     email: 'first@second.com'
// }
// person.contacts = contacts;
// console.log(person);
//
//
// // Задач 3
// let myTopFilm = [
//     'Game of thrones',
//     'Babylon 5',
//     'Star Wars',
// ]
//
// myTopFilm.push('Boys');
// myTopFilm.unshift('Top Gear');
// console.log(myTopFilm);
//
//
// // Задача 4
// let employee = {
// 	salary: 2000,
// 	taxes: 200,
// 	position: "front-end developer",
// 	level: "middle",
// };
//
// let employee2 = {
// 	salary: 1500,
// 	taxes: 150,
// 	position: "project manager",
// 	level: "junior",
// };
//
// // Збільшення на 2 всіх числових значень в об'єкті
// for (let i in employee) {
//     if (typeof i === "number") {
//         employee[i] += 2;
//     }
// }
// // Створення і додавання до об'єкту методу "showInfo"
// employee.showInfo = function () {
//     console.log(`"${this.level}" on position "${this.position}" заробляє ${this.salary - this.taxes}`);
// }
//
// employee2.showInfo = employee.showInfo;
// employee.showInfo();
// employee2.showInfo();
//
//
// // Задача 5
// function sumInput() {
//     let arrayOfValues = [];
//     let flag = true;
//     let countSum = 0;
//     // Формуємо масив числових значень і сумуємо їх. Чи потрібно було провести сумування в окремому "forEach" поза циклом?
//     while (flag) {
//         let value = prompt('Введіть число:');
//         if (value === null || value === '' || isNaN(value)) {
//             flag = false;
//         } else {
//             value = parseInt(value)
//             arrayOfValues.push(value);
//             countSum += value;
//         }
//     }
//     return countSum;
// }
//
// console.log(sumInput());
//
//
// // Задача 6
// const person = {
//  name: "John",
//  age: 30,
//  job: 'software engineer',
//  address: {
//   city: "New York",
//   country: "USA"
//  }
// };
//
// let {name, age, job: currentJob, address : {city, country: currentCountry}} = person;
//
// console.log(name);
// console.log(age);
// console.log(currentJob);
// console.log(city);
// console.log(currentCountry);
//

// Задача 7
let books = {
 countries: [
  {
   country: "Англія",
   authors: [
    {
     author: "Артур Конан Дойль",
     books: [
      {
       title: "Пригоди Шерлока Холмса",
       year: 1887,
       genre: "Роман"
      },
      {
       title: "Загадка Боскомського долу",
       year: 1912,
       genre: "Детектив"
      },
      {
       title: "Загадка Червоного Цирку",
       year: 1927,
       genre: "Детектив"
      }
     ]
    }
   ]
  },
  {
   country: "Україна",
   authors: [
    {
     author: "Макс Кідрук",
     books: [
      {
       title: "Твердиня",
       year: 2013,
       genre: "Роман"
      },
      {
       title: "Нові темні віки",
       year: 2023,
       genre: "Роман"
      }
     ]
    },
    {
     author: "Тарас Шевченко",
     books: [
      {
       title: "Кобзар",
       year: 1840,
       genre: "Роман"
      }
     ]
    }
   ]
  } 
 ]
}

let {countries: [{authors: [{books: [firstBook, ,thirdBook]}]}]} = books;
let {countries: [, {authors: [{books: [, {title}]}]}]} = books;
let {countries: [, {authors: [, {books: [{year: yearOfPublicationKobzar}]}]}]} = books;

console.log(firstBook);
console.log(thirdBook);
console.log(title);
console.log(yearOfPublicationKobzar);
