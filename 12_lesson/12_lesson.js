'use strict';


// // Задача 1-1
// class Animal {
//     constructor(word) {
//         this.word = word;
//     }
//
//     say() {
//         console.log(this.word);
//     }
// }
//
// const dog = new Animal('Woof!');
// dog.say();
//
//
// // Задача 1-2
// class Car {
//     constructor(model, speed) {
//         this.model = model;
//         this.speed = speed;
//     }
//
//     ride() {
//         let msg = this.speed > 0
//             ? `${this.model} їде зі швидкістю ${this.speed} км/год`
//             : `${this.model} готов їхати. Натисніть педаль газу.`;
//         console.log(msg);
//     }
//
//     stop() {
//         this.speed = 0;
//         console.log(`${this.model} зупинився. Швидкість ${this.speed} км/год`);
//     }
//
//     gase() {
//         this.speed += 10;
//         console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
//     }
//
//     brake() {
//         this.speed -= 10;
//         if (this.speed > 0) {
//             console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
//         } else {
//             this.stop();
//         }
//     }
// }
//
// const bmw = new Car('BMW', 75);
// const ford = new Car('Ford', 35);
//
// ford.ride();
// ford.gase();
// ford.brake();
// ford.brake();
// ford.brake();
// ford.brake();
// ford.brake();
// ford.ride();
// ford.gase();
// ford.gase();
// ford.stop();
//
// bmw.ride();
// bmw.gase();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// bmw.ride();
// bmw.gase();
// bmw.gase();
// bmw.stop();


// // Задача 1-3
// class TodoList {
//     #todos = []
//
//     #show() {
//         for (let i=1; i < this.#todos.length + 1; i++) {
//             console.log(`${i}. ${this.#todos[i - 1]}`);
//         }
//     }
//
//     addTask(task) {
//         this.#todos.push(task);
//         this.#show();
//     }
//
//     removeTask(task) {
//         if (this.#todos.includes(task)) {
//             let ind = this.#todos.indexOf(task);
//             this.#todos.splice(ind, 1);
//             this.#show();
//         } else if (this.#todos) {
//             console.log('No task in queue');
//         } else {
//             console.log('Enter valid task name');
//         }
//     }
// }
//
// const td = new TodoList();
// td.addTask('make homework');
// td.addTask('eat dinner');
// td.addTask('sleeping');
// td.removeTask('eat dinner');
// td.removeTask('make homework');
// td.removeTask('sleeping');
// td.removeTask('sleeping');


// // Задача 2
// class Vehicle {
//     #vehicleSpeed;
//     constructor(speed) {
//         this.speed = speed;
//         this.#vehicleSpeed = speed;
//         this.name = '';
//     }
//
//     ride() {
//         if (!this.speed) {
//             this.speed = this.#vehicleSpeed;
//             console.log(`${this.name} розпочинає рух. Набор швидкості до ${this.speed} км/год.`);
//         } else {
//             console.log(`${this.name} їде за швидкістю ${this.speed} км/год.`);
//         }
//     }
//
//     stop() {
//         this.speed = 0;
//         console.log(`Стоїть. Швидкість ${this.speed} км/год.`)
//     }
// }
//
// class Bicycle extends Vehicle {
//     constructor(name, speed) {
//         super(speed);
//         this.name = name;
//     }
//
//     rideOurVehicle() {
//         super.ride();
//         console.log('Щоб він їхав, треба крутить педали')
//     }
// }
//
// class Car extends Vehicle {
//     constructor(name, speed) {
//         super(speed);
//         this.name = name;
//     }
//
//     stopCar() {
//         super.stop();
//         console.log('Двигун вимкнено')
//     }
// }
//
// const bicycle1 = new Bicycle('MTB', 25);
// const bicycle2 = new Bicycle('Road', 45)
// bicycle1.ride();
// bicycle1.rideOurVehicle();
// bicycle1.stop();
// bicycle2.ride();
// bicycle2.rideOurVehicle();
// bicycle2.stop();
//
// console.log('\n');
//
// const car1 = new Car('Ford Mustang', 333);
// const car2 = new Car('Volvo XC90', 170);
// car1.ride();
// car1.stop();
// car1.stopCar();
// car2.ride();
// car2.stop();
// car2.stopCar();
// car2.ride();
// car2.ride();
// car1.ride();
//
// console.log(car2.speed);
// console.log(car1.speed);
// console.log(bicycle2.name);
// console.log(bicycle1.name);


// Задача 3
// Задача вирішена без створення і наслідування класу "Discount". Розрахунок ціни зі знижкою (якщо є) йде в класі
// "Product". Удосконалені методи "addProduct", "removeProduct" для роботи з додаванням/видаленням різної кількості 
// того самого товару. Окремо закоментований класс "DiscountProduct" який працює і наслідує все що треба.
class Customer {
    #shoppingCart;
    #sum;

    constructor(name) {
        this.name = name;
        this.#shoppingCart = [];
        this.#sum = 0;
    }
    
    // Додавання товару в "захищений" кошик. Контроль кількості. 
    addProduct(product) {
        if (this.#shoppingCart.includes(product)) {
            let productIndex = this.#shoppingCart.indexOf(product);
            this.#shoppingCart[productIndex].quantity++;
        } else {
            this.#shoppingCart.push(product);
        }
        this.#sum += product.price;
    }

    // Видалення товару з кошика. Контроль кількості і відсутності товару.
    removeProduct(product) {
        if (this.#shoppingCart.includes(product)) {
            let productIndex = this.#shoppingCart.indexOf(product);
            if (this.#shoppingCart[productIndex].quantity > 1) {
                this.#shoppingCart[productIndex].quantity--;
            } else {
                this.#shoppingCart.splice(productIndex, 1);
            }
            this.#sum -= product.price;
        } else {
            console.log(`Can't delete ${product.title} from cart. Object does not exist."`);
        }
    }

    // Вивід вмісту кошика в консоль - з ціной, кількістю, знижками якщо є. Очищення кошика і суми. 
    buy() {
        console.log(`${this.name} купив наступні товари:`)
        this.#shoppingCart.forEach((obj) => {
            // "savedMoneyMsg" - розмір знижки на товар або порожня стрічка, якщо знижки немає.
            let savedMoney = obj.originalPrice - obj.price;
            let savedMoneyMsg = (savedMoney)
                ? `Знижка склала ${(savedMoney * obj.quantity).toFixed(2)} грн.`
                : '';
            // "productSum" - загальна сума купленого товару одного найменування.
            let productSum = (obj.price * obj.quantity).toFixed(2);
            console.log(`${obj.title}(${obj.originalPrice} грн/од) в кількості ${obj.quantity}шт. - на сумму ${productSum} грн. ${savedMoneyMsg}`);
        })
        console.log(`Всього на сумму: ${this.#sum.toFixed(2)} грн.`);
        this.#sum = 0;
        this.#shoppingCart = [];
    }
}

class Product {
    constructor(title, price, discount = 0) {
        this.title = title;
        this.originalPrice = price;
        this.price = (discount)
            ? this.#calculateDiscountPrice(price, discount)
            : this.originalPrice;
        this.quantity = 1;
    }

    #calculateDiscountPrice(price, discount) {
        return price * (1 - discount / 100);
    }
}

// class DiscountProduct extends Product {
//     constructor(title, price, discount) {
//         super(title, price);
//         this.discount = discount;
//         this.price = this.calculateDiscountPrice()
//     }
//
//     calculateDiscountPrice() {
//         return this.price * (1 - this.discount / 100);
//     }
// }

const prod1 = new Product('"Яйця"', 10);
const prod2 = new Product('"Молоко"', 6);
const prod3 = new Product('"Пиво"', 12);
const prod4 = new Product('"Пица"', 20, 35);
const prod5 = new Product('"Бекон"', 25, 13.5);

const customer1 = new Customer('John Dow');

customer1.addProduct(prod1);
customer1.addProduct(prod2);
customer1.addProduct(prod3);
customer1.addProduct(prod1);
customer1.removeProduct(prod2);
customer1.removeProduct(prod1);
customer1.removeProduct(prod2);
customer1.addProduct(prod4);
customer1.addProduct(prod4);
customer1.addProduct(prod5);
customer1.addProduct(prod5);

customer1.buy();
