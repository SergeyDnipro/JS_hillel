const operation = document.getElementById("operation");
const mul = document.getElementById("mul");
const sub = document.getElementById("sub");
const add = document.getElementById("add");
const division = document.getElementById("division");
const resultButton = document.getElementById("result_button");
const resetButton = document.getElementById("reset");

const result = document.querySelector(".result");
const inputValue1 = document.querySelector(".value1");
const inputValue2 = document.querySelector(".value2");

// Унеможливлення вводу в поле "результат"
result.setAttribute('disabled', 'true');

// Печатає між полями вводу даних знак операції, яку бажаємо провести. 
function showOperation (event) {
    operation.innerHTML = event.target.innerHTML;
}

// Функція валідації ввода в поля для розрахунку
function validateInput(...args) {
    let newString = args.join('');
    for (let element of newString) {
        if (isNaN(parseFloat(element))) {
            return false;
        }
    }
    return true;
}

function resultOperation(event) {

    let operatorValue = operation.innerHTML;
    // Ресет полів вводу, коли відсутній оператор дії фбо нажата кнопка "ресет" 
    if (operatorValue === '' || event.target.innerHTML === 'Reset') {
        inputValue1.value = 0;
        inputValue2.value = 0;
        result.value = 0;
    // Валідація полів вводу на наявність чисел.    
    } else if (!validateInput(inputValue1.value, inputValue2.value)) {
        alert('Only digits allowed!');
    // Саме аріфметичні розрахунки для введених даних.     
    } else if (operatorValue === '+') {
        result.value = parseFloat(inputValue1.value) + parseFloat(inputValue2.value);
    } else if (operatorValue === '-') {
        result.value = parseFloat(inputValue1.value) - parseFloat(inputValue2.value);
    } else if (operatorValue === 'x') {
        result.value = parseFloat(inputValue1.value) * parseFloat(inputValue2.value);
    } else if (operatorValue === '/') {
        result.value = parseFloat(inputValue1.value) / parseFloat(inputValue2.value);
    }
}

mul.addEventListener("click", showOperation);
sub.addEventListener("click", showOperation);
add.addEventListener("click", showOperation);
division.addEventListener("click", showOperation);
resultButton.addEventListener("click", resultOperation);
resetButton.addEventListener("click", resultOperation);
