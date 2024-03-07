const rollButton = document.getElementById('btn');
const dices = document.getElementById('input');
const result = document.getElementById('output');

rollButton.onclick = checkValue;

function checkValue() {
    if (dices.value == "") {
        window.alert("Enter dice amount!");
    }
    else if (dices.value == 0) {
        window.alert("Dice amount cannot be zero!");
    }
    else if (dices.value < 0) {
        window.alert("Dice amount cannot be negative!");
    }
    else {
        rollDices();
    }
}

function rollDices() {
    let rolledDices = [];
    for (i = 0; i < dices.value; i++) {
        rolledDices.push(Math.round(Math.random() * 5 + 1));
    }
    result.style.display = "block";
    result.textContent = `You rolled the dices: ${rolledDices.join(', ')}`;
}    