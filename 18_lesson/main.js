"use strict";

const BASE_URL = "http://localhost:3000/posts";

const inputTitle = document.querySelector(".title");
const inputBody = document.querySelector(".body");
const createBtn = document.querySelector(".btn-create");
const ul = document.querySelector(".posts");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
let postsCnt = 0;

// Бачим помилку на екрані.
function showError(errorInstance) {
    error.classList.remove("hide");
    error.classList.add("show");
    error.innerHTML = errorInstance;
}

// Ховаєм функціонал відображення помилки.
function hideError() {
    error.classList.remove("show");
    error.classList.add("hide");
}

// Бачим надпис "Лоадинг" протягом завантаження.
function showLoading() {
    loader.classList.add("show");
    loader.classList.remove("hide");
}

// Ховаєм надпис "Лоадинг" після завантаження постів.
function hideLoading() {
    loader.classList.add("hide");
    loader.classList.remove("show");
}

// Функція завантаження даних та робота зі стилями.
async function getData(url) {
    try {
        showLoading();
        const response = await fetch(url);
        const result = await response.json();
        postsCnt = result.length;

        getPosts(result);
        hideError();
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();

    }
}

// Формування наповнення сторінки з постами, встановлення обробників подій. Обнулення списку постів перед перезавантаженням.
function getPosts(result) {
    ul.innerHTML = '';
    result.forEach((post) => {

        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        const form = document.createElement("form");
        const inputEdit = document.createElement("input");
        const saveBtn = document.createElement("button");
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        const p = document.createElement("p");

        li.classList.add("post");
        h3.classList.add("show");
        form.classList.add("edit-form", "hide");
        inputEdit.classList.add("edit");
        inputEdit.setAttribute("value", `${post.title}`)
        saveBtn.classList.add("btn-save");
        editBtn.classList.add("btn-edit");
        deleteBtn.classList.add("btn-delete");

        h3.innerHTML = `#${post.id} - ${post.title}`;
        p.innerHTML = post.body;
        saveBtn.innerText = 'Save';
        editBtn.innerText = 'Edit';
        deleteBtn.innerText = 'Delete';
        form.appendChild(inputEdit);
        form.appendChild(saveBtn);

        // Обробник клику на кнопці Save. Зберігає поточне значення "input" в поле "title".
        saveBtn.addEventListener("click", (e) => {
            e.preventDefault();

            fetch(`${BASE_URL}/${post.id}`, {
                method: "PATCH",
                body: JSON.stringify({title: inputEdit.value}),
            }).then(() => {
                getData(BASE_URL)
            });
        });

        // Обробник ховає поточний title та відібражає поле "input" для редагування.
        editBtn.addEventListener("click", (e) => {
            h3.classList.toggle("show")
            h3.classList.toggle("hide")
            form.classList.toggle("hide")
        });

        // Видаляє поточний пост. Після цього перезавантажує список постів.
        deleteBtn.addEventListener("click", (e) => {
            fetch(`${BASE_URL}/${post.id}`, {
                method: "DELETE",
            }).then(() => {
                getData(BASE_URL)
            });
        });

        li.append(h3, form, editBtn, deleteBtn, p);
        ul.append(li);
    });

    // Створення об'єкта "пост". Обробка помилки при порожніх полях вводу. Очищення полів вводу після створення посту.
    // Перезавантажує список постів.
    createBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let newPost = {
            id: (postsCnt + 1).toString(),
            title: inputTitle.value,
            body: inputBody.value,
        };

        if (newPost.title === '' || newPost.body === '') {
            showError('Please fill all required fields')
        } else {
            fetch(BASE_URL, {
                method: "POST",
                body: JSON.stringify(newPost)
            }).then(() => {
                inputTitle.value = ''
                inputBody.value = ''
                getData(BASE_URL);
            });
        }
    });
}

getData(BASE_URL);
