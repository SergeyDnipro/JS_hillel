'use strict';


// Задача 1
const Guest = {
    name: 'John',
    isRegistered: false,
};

const User = {
    isRegistered: true,
    isAdmin: false,
    email: "email@mail.com",

    __proto__: Guest,
};

const Admin = {
    isAdmin: true,

    addProduct(product) {
        console.log(`Я админ, додаю новий продукт - ${product}`);
    },

    __proto__: User,
}

for (let key in Admin) {
    if (Admin.hasOwnProperty(key)) {
        console.log(key);
    }
}

// Задача 1-2
const Vehicle = {
    ride() {
        console.log(`Їду на ${this.name} зі швидкістю ${this.speed} км/год`)
    },
};

const Car = {
    name: 'автомобіль',
    speed: 100,

    __proto__: Vehicle,
};

const Bicycle = {
    name: 'велосипед',
    speed: 25,

    __proto__: Vehicle,
};

Car.ride();
Bicycle.ride();


// Задача 1-3
const Animal = {
    sleep() {
        console.log('Я сплю!');
    },
};

const Dog = {
    showVoice() {
        console.log('Гав');
    },

    __proto__: Animal,
};

const Pug = {
    name: 'Vader',
    sayHi() {
        console.log(`Добрий вечір! Мене звати ${this.name}.`);
    },
    sleep() {
        console.log('Я сплю і храплю');
    },

    __proto__: Dog,
};

Pug.__proto__.__proto__.sleep();
Pug.showVoice();
Pug.sayHi();
Pug.sleep();

// Задача 2
const user = {
    _name: '',
    _age: 0,

    get name() {
        return this._name;
    },

    get age() {
        return this._age;
    },

    set name(newName) {
        if (newName.length > 2) {
            this._name = newName;
        } else {
            console.log('Enter valid name');
        }
    },

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log('Enter valid age');
        }
    }
}

user.name = 'qw';
user.name = 'Alex';
user.age = -5;
user.age = 13;

// Задача 3
// Міркував, створити новий прототип через додавання нового об'єкту чи додати властивості і методи до автоматично
// створеного прототипа. Також думав додати в прототип окрему властивість "периметр" через getter чи окрему функцію, потім
// потім в розрахунках використовувати половине значення. Зато буде розраховане значення "периметру". Ну то таке, 
// вирішив не робити.
function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

// function getHalfPerimetr() {
//     return (this.a + this.b + this.c) / 2;
// }

function getSquare() {
    let halfPerimetr = (this.a + this.b + this.c) / 2;
    let evalSquare = Math.sqrt(
        halfPerimetr *
        (halfPerimetr - this.a) *
        (halfPerimetr - this.b) *
        (halfPerimetr - this.c)
    );
    
    if (Number.isInteger(evalSquare)) {
            return evalSquare.toString();
    }
    return evalSquare.toFixed(2);
}

// Triangle.prototype.getHalfPerimetr = getHalfPerimetr
Triangle.prototype.getSquare = getSquare

const triangle1 = new Triangle(5, 4, 3);
const triangle2 = new Triangle(5, 5, 2);
const triangle3 = new Triangle(4, 4, 4);

console.log(triangle1.getSquare()); 
console.log(triangle2.getSquare()); 
console.log(triangle3.getSquare()); 
