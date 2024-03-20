'use strict';


// Задача 1
let employee1 = {
    fullName: 'Calvin Klein',
    position: 'junior project manager',
    salary: 750
}

let employee2 = {
    fullName: 'Marty McFly',
    position: 'trainee back-end developer',
    salary: 450
}

function showInfo(currency) {
    let currentSalary = currency === 'грн.'
        ? this.salary * 39
        : this.salary
    
    console.log(`${this.fullName} на позиції ${this.position} заробляє ${currentSalary}${currency}`);
}

showInfo.apply(employee1, ['$']);
showInfo.apply(employee2, ['грн.']);

let showInfoOfEmployee1 = showInfo.bind(employee1);
let showInfoOfEmployee2 = showInfo.bind(employee2);

showInfoOfEmployee1('$');
showInfoOfEmployee2('грн.');


// Задача 2
let calculator = {
    // Якщо визвати методи 'sum' і 'mul' перед 'read', або визвати 'read' без параметра/ів - нічого не закрашиться)
    num1: 0,
    num2: 0,
    
    read(var1, var2) {
        this.num1 = var1 || this.num1;
        this.num2 = var2 || this.num2;
    },

    sum() {
        return this.num1 + this.num2;
    },

    mul() {
        return this.num1 * this.num2;
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
calculator.read(3, 6);
console.log(calculator.sum());
console.log(calculator.mul());


// Задача 3
let cart = {
    items:{},
    
    // Додавання товара. Якщо він присутній - збільшується кількість в кошику.  
    addItem(title, price) {
        let objToAdd = this.items;
        if (!objToAdd[title]) {
            objToAdd[title] = {
                title: title,
                price: price,
                quantity: 1
            };
        } else {
            objToAdd[title].quantity++;
            objToAdd[title].price = price;
        }
        return this;
    },
    
    // Видалення товару. Якща кількість > 1, то зменшує кількість. В іншому випадку - видаляє об'єкт.
    removeItem(title) {
        let objToRemove = this.items;
        if (objToRemove[title]) {
            if (objToRemove[title].quantity > 1) {
                objToRemove[title].quantity--;
            } else {
                delete objToRemove[title];
            }
        }
        return this;
    },
    
    // Рахуєм сумарну вартість всіх товарів.
    calculateTotalPrice() {
        let that = this.items;
        let count = 0;
        for (let currentItem in that) {
            count += that[currentItem].price * that[currentItem].quantity;
        }
        console.log(count);
    },
    
    // Виводимо в консоль стан нашого кошика. 
    getAllItems() {
        let that = this.items;
        for (let currentItem in that) {
            console.log(
                `назва: ${that[currentItem].title}, ціна: ${that[currentItem].price}, кількість: ${that[currentItem].quantity}`
            );
        }
    }
};

// Ланцюгове використання методів. 
cart.addItem('iPhone 13', 1000).addItem('Чашка', 10);
cart.addItem('iPhone 13', 1000).addItem('Чашка', 10).addItem('iPhone 15 Pro', 10000);
cart.addItem('iPhone 13', 1000).removeItem('Чашка').removeItem('iPhone 13');
cart.getAllItems();
cart.calculateTotalPrice();