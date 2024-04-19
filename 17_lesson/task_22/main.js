const inputField = document.querySelector(".input_field");
const countLeft = document.querySelector(".count");
const gamePad = document.querySelector(".rect");

let startMouseYCoord = 0;
let startGameXCoordFlag = false;
let endGameXCoord = 0;

// Стартові умови гри і координати 
function setStartCoords(e) {
    if (!startMouseYCoord && !startGameXCoordFlag) {
        startMouseYCoord = e.clientY;
        startGameXCoordFlag = e.clientX <= gamePad.offsetLeft + 2 && e.clientX >= gamePad.offsetLeft - 2;
        endGameXCoord = e.clientX + 298;
    }
}

// Ресет всіх параметрів гри при виграші чи програші.
function resetValuesOnStart() {
    countLeft.innerHTML = '(число з input)';
    inputField.value = null;
    gamePad.innerHTML = null;
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
