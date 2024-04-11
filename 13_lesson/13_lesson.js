'use strict';

// let actor = {
// name: "Tom Hardy",
// age: 44,
// gender: "Male",
// nationality: "British",
// lastFilm: "Venom: Let There Be Carnage"
// };
//
//
// // Задача 1-1
// function setLength(obj) {
//     let quantity = Object.keys(obj).length;
//     obj.length = quantity
//     return obj;
// }
//
// console.log(setLength(actor));
//
//
// // Задача 1-2
// function getEntries(obj) {
//     let newArray = [];
//     for (let key in obj) {
//         newArray.push([key, obj[key]]);
//     }
//     return newArray;
// }
//
// console.log(getEntries(actor));
//
//
// // Задача 1-3
// const actorCustom = Object.defineProperties(
//     {},
//     {
//         name: {
//             value: "Robert Patrick",
//             writable: false,
//             enumerable: true,
//             configurable: true,
//         },
//         age: {
//             value: 63,
//             writable: true,
//             enumerable: true,
//             configurable: true,
//         },
//         sex: {
//             value: 'male',
//             writable: false,
//             enumerable: true,
//             configurable: true,
//         },
//         bestFilm: {
//             value: 'Terminator 2',
//             writable: true,
//             enumerable: false,
//             configurable: true,
//         },
//         bestRole: {
//             value: "bad guy (robot)",
//             writable: true,
//             enumerable: true,
//             // configurable: true,
//         }
//     }
// );
// delete actorCustom['bestRole'];
// console.log(Object.getOwnPropertyDescriptors(actorCustom));
//

// Задача 1-4
// class Animal {
//     constructor(voice) {
//         this.voice = voice;
//     }
//
//     say() {
//         console.log(this.voice);
//     }
// }
//
// Object.defineProperty(dog, 'say', {enumerable: false});
//
// function Animal(voice) {
//     this.voice = voice;
//     this.say = () => {
//         console.log(this.voice);
//     }
//     Object.defineProperty(this, 'say', {enumerable: false});
// }
//
// const dog = new Animal("Woof!");
// dog.say();
//
//
// for (let property in dog) {
//     console.log(property);
// }
//
//
// // Задача 2
// class Car {
//     constructor(model, price) {
//         this.model = model
//         this.price = price
//     }
//
//     [Symbol.toPrimitive](hint) {
//         if (hint === 'string') {
//             return this.model;
//         } else if (hint === 'default') {
//             return this.price;
//         }
//     }
// }
//
// const car1 = new Car('BMW', 15000);
// const car2 = new Car('Ford', 20000);
//
// console.log(car1 + car2);
// alert(car1);
// alert(car2);
//
//
// // Задача 3
// // Перший метод копіює тільки перший рівень об'єкта (не референс тайп), тому я його закоментував. Але для даної задачі
// // підходить.
// function cloneObj(obj, ...args) {
//     let cloneArrayToObj = [];
//
//     // for (let key in obj) {
//     //     if (!args.includes(key)) {
//     //         cloneArrayToObj.push([key, obj[key]]);
//     //     }
//     // }
//     // const newObj = Object.fromEntries(cloneArrayToObj);
//
//     const newObj = structuredClone(obj);
//     for (let key in obj) {
//         if (args.includes(key)) {
//             delete newObj[key];
//         }
//     }
//
//     return newObj;
// }
//
// // let obj1 = cloneObj(actor, 'gender', 'age');
// console.log(cloneObj(actor, 'gender', 'age'));
//