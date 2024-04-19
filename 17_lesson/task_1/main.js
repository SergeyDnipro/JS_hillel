const button1 = document.querySelector(".my_button_class");
const inputArea = document.querySelector("input");
const showArea = document.querySelector("h1");


// Задача 1-1
button1.addEventListener("click", function () {
    console.log("Клік");
})

button1.addEventListener("contextmenu", function () {
    console.log("Правий клік");
})

button1.addEventListener("dblclick", function () {
    console.log("Подвійний клік");
})

// Задача 1-2 і 1-3
inputArea.addEventListener("keyup", function(event) {
    showArea.innerHTML = event.target.value;
    alert(`Ви ввели на клавіатурі літеру "${event.key}"`);
})