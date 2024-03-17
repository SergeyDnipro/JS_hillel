'use strict';


// Задача 1
let mapObj = new Map();
mapObj.set(true, 'boolean')
    .set(123, 'number')
    .set('abc', 'string')
    .set(undefined, 'undefined')
    .set(null, 'null')
    .set(1000n, 'bigInt')
    .set({}, 'object')
    .set(NaN, 'NaN');

mapObj.forEach((value, key, mapObj) => {
    console.log(`key = ${key}, value = ${value}`)
})

let objFromMap = Object.fromEntries(mapObj);
console.log(objFromMap);

let mapObj2 = new Map(Object.entries(objFromMap));
console.log(mapObj2);


// Задача 2
function mergeArrays(...args) {
    let mergedArray = args.reduce((final, element) => {
        final = final.concat(element);
        return final;
    }, [])
    let sortedArray = new Set(mergedArray);

    return sortedArray;
}

console.log(mergeArrays([1,2], [2,3], [3,4]));


// Задача 3
// Функція повертає стрічку з лексікографіческі відсортованими літерами.
function sortLettersInWord(string) {
    return string.split('').sort().join('')
}

function aClean(array) {

    let setOfUniqueLetters = new Set();

    array.forEach((element) => {
        setOfUniqueLetters.add(sortLettersInWord(element));
    })
    
    // "filter" перевіряє (трансформовані певним чином) елементи на входження в "Set". З "Set' потім ці елементи видаляються.  
    let finalArray = array.filter((element) => {
        if (!setOfUniqueLetters) {
            return false;
        }
        let sortedWord = sortLettersInWord(element);
        let isWordInSet = setOfUniqueLetters.has(sortedWord);
        setOfUniqueLetters.delete(sortedWord);
        return isWordInSet;
    })

    return finalArray;
}

console.log(aClean(["материк", "мошкара", "апельсін", "спаніель", "мінотавр", "ромашка", "норматів", "метрика"]));


// Задача 4
const books = {
    fantastic: {
        "Френк Герберт": [
            {
                title: "Дюна",
                year: 1965,
            },
            {
                title: "Дюна. Месія месіїв",
                year: 1969,
            },
            {
                title: "Діти Дюни",
                year: 1976,
            },
        ],
        "Станіслав Лем": [
            {
                title: "Соляріс",
                year: 1961,
            },
            {
                title: "Соляріс. Зіркові щоденники Ійона Тихого",
                year: 1971,
            },
        ],
    },
    novel: {
        'Ремарк': [
            {
                title: "Три товарища",
                year: 1936,
            },
            {
                title: "Триумфальна арка",
                year: 1942,
            },
        ],
        "Джордж Оруелл": [
            {
                title: "1984",
                year: 1949,
            },
            {
                title: "Ферма Господаря Вилки",
                year: 1945,
            },
        ],
    },
    fantasy: {
        "Володар перснів": [
            {
                title: "Братство Кільця",
                year: 1954,
            },
            {
                title: "Дві вежі",
                year: 1954,
            },
            {
                title: "Повернення короля",
                year: 1955,
            },
        ],
        "Гаррі Поттер": [
            {
                title: "Гаррі Поттер і Філософський камінь",
                year: 1997,
            },
            {
                title: "Гаррі Поттер і тайна кімната",
                year: 1998,
            },
        ],
    },
};

books[Symbol.iterator] = function () {
    let booksTitle = [];
    let i = 0;

    for (const genre in this) {
        for (const author in this[genre]) {
            this[genre][author].forEach((element) => {
                booksTitle.push(element.title);
            });
        }
    }

    return {
        next() {
            if (i < booksTitle.length) {
                return {value: booksTitle[i++], done: false}
            }
            return {done: true}
        }
    };
};

for (let title of books) {
    console.log(title);
}
