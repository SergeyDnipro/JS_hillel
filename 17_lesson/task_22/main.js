const inputField = document.querySelector(".input_field");
const countLeft = document.querySelector(".count");
const gamePad = document.querySelector(".rect");
const gameStart = document.querySelector(".game_start");

let startMouseYCoord = 0;
let startGameXCoordFlag = false;
let endGameXCoord = 0;

// Стартові умови гри і координати. Відлік починається, коли ігрок перетинає ліву межу ігрового поля. 
function setStartCoords(e) {
    if (!startGameXCoordFlag) {
        startGameXCoordFlag = e.clientX <= gamePad.offsetLeft + 2 && e.clientX >= gamePad.offsetLeft - 2;
        endGameXCoord = gamePad.offsetLeft + 297;
    } else {
        gameStart.innerHTML = '...Go!'
    }
    if (!startMouseYCoord) {
        startMouseYCoord = e.clientY;
    }
}

// Ресет всіх параметрів гри при виграші чи програші.
function resetValuesOnStart() {
    countLeft.innerHTML = '(число з input)';
    inputField.value = null;
    gamePad.innerHTML = null;
    gameStart.innerHTML = null;
    startMouseYCoord = 0;
    startGameXCoordFlag = false;
}

// Заповнення кількості спроб.
inputField.addEventListener("keyup", function (e) {
    countLeft.innerText = e.target.value;
})

gamePad.addEventListener("mousemove", function (e) {
    if (inputField.value) {
        setStartCoords(e);
        e.target.innerHTML = `X: ${e.clientX} Y: ${e.clientY}`;
        let differenceY = Math.abs(parseInt(startMouseYCoord) - parseInt(e.clientY));

        if (differenceY) {
            countLeft.innerText -= 1;
            startMouseYCoord = e.clientY;
        }

        if (startGameXCoordFlag && e.clientX >= endGameXCoord && countLeft.innerText >= 0) {
            alert('You win');
            resetValuesOnStart();
        } else if (countLeft.innerText < 0) {
            alert('You lose');
            resetValuesOnStart();
        }
    }
})
