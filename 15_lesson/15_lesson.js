'use strict';

// Задача 1-1
function showDelay(msg) {
    setTimeout(() => {
        console.log(msg);
    }, 2000);
}

showDelay('1st exercise');


// Задача 1-2
function repeat(msg) {
    setInterval(() => {
        console.log(msg);
    }, 2000);
}

repeat('2d exercise');

// Задача 1-3
function repeatRecursive(msg) {
    let counter = 0;
    let printMsgId = setTimeout(function repeat() {
        console.log(`${msg} ${++counter}`);
        printMsgId = setTimeout(repeat, 2000);
    }, 2000);
}

repeatRecursive('message #')



// Задача 1-4
function boom(count) {
    let boomId = setInterval(() => {
        if (count === 0) {
            clearInterval(boomId);
            console.log('BOOM!!!');
            return;
        } else if (count < 0) {
            console.log(`Count: ${count++}`);
        } else {
            console.log(`Count: ${count--}`);
        }
    }, 1000);
}

boom(-10);
boom(10);



// Задача 2
function sayHi() {
    console.log('Hello');
}

function delay(fn, sec) {
    function delayedFunc() {
        setTimeout(fn, sec * 1000);
    }
    return delayedFunc;
}

const testDelay = delay(sayHi, 5);

sayHi();
testDelay();



// Задача 3
class Timer {
    #objIntervalId;
    constructor() {
        this.timer = 0;
    }

    start() {
        clearInterval(this.#objIntervalId);
        this.#objIntervalId = setInterval(() => {
            console.log(++this.timer);
        }, 1000);
    }

    stop() {
        clearInterval(this.#objIntervalId);
        this.timer = 0;
    }

    pause() {
        clearInterval(this.#objIntervalId);
        // так як "пауза" вмикається на 5-ій секунді, то цифра "5" не відібражається в консолі "старта". 
        // Тому її вивів окремо. 
        console.log(++this.timer);
        this.#objIntervalId = setInterval(() => {
        }, 1000);
    }

    show() {
        console.log(this.timer);
    }
}

const newTimer = new Timer();

newTimer.start();

setTimeout(() => {
    newTimer.pause();
}, 5000);

setTimeout(() => {
    newTimer.start();
}, 7000);

setTimeout(() => {
    newTimer.stop();
    newTimer.show();
}, 9000);



// Задача 4
// Я зробив припущення, що страви для клиєнтів готуються разом одночасно.
function makeListOfDishes(name, obj) {
    let tempArray = [name];
    let maxTime = 0;
    for (let element of obj) {
        tempArray.push(element.name);
        maxTime = (element.time > maxTime) ? element.time : maxTime;
    }
    tempArray.push(maxTime);
    return tempArray;
}

const customers = {
    "Katy Perry": [
        {name: "Borsh", time: 5000},
        {name: "vareniki", time: 1000},
        {name: "uzvar", time: 500},
    ],
    "Cristiano Ronaldo": [
        {name: "Soup", time: 7000},
        {name: "porridge", time: 1000},
        {name: "water", time: 100},
    ],
    "Jason Statham": [
        {name: "fried potatoes", time: 6000},
        {name: "steak", time: 10000},
        {name: "juice", time: 100},
    ],
};

for (let customer in customers) {
    let newArray = makeListOfDishes(customer, customers[customer]);
    let name = newArray.shift();
    let time = newArray.pop();
    setTimeout(() => {
        console.log(`Шановний відвідувач, ${name}, ваше замовлення готове: ${newArray.join(', ')}. Час приготування ${time / 1000} минут. Смачного!`);
    }, time);
}
