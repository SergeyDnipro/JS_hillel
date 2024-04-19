const inputField = document.querySelector(".input_field");
const createButton = document.getElementById("create_button");
const background = document.querySelector(".background");
const close = document.querySelector(".close");

// Створення масивів кольорів для валідації ввода
const colorSet = [];
const colorList = [
    'black', 'red', 'green', 'blue', 'yellow', 'gray', 'silver', 'teal', 'purple', 'pink', 'navy'
];

function showErrorWindow() {
    background.classList.add("show");
}

function hideErrorWindow() {
    background.classList.remove("show");
}

inputField.addEventListener("keyup", (e) => {
    inputField.value = e.target.value;
})

createButton.addEventListener("click", () => {
    let color = inputField.value;
    // Якщо проходить валідація - створюєеться кнопка і обробник події.
    if (!colorSet.includes(color) && colorList.includes(color)) {

        const createColorButton = document.createElement("button");
        createColorButton.innerHTML = inputField.value;
        createColorButton.style.marginLeft = "5px";

        createColorButton.addEventListener("click", () => {
            document.body.style.backgroundColor = createColorButton.innerText;
        })
        
        colorSet.push(color);
        document.body.append(createColorButton);
    } else {
        showErrorWindow();
    }
})

// Обробник події для того, щоб сховати модальне вікно з попередженням про неправильний ввод.
background.addEventListener("click", (e) => {
    if (e.target === background || e.target === close) {
        hideErrorWindow();
    }
})


