document.addEventListener("DOMContentLoaded", function() {
    rollDice();
    document.getElementById("rollButton").focus();
});

function rollDice() {
    var diceResult = Math.floor(Math.random() * 12) + 1;
    document.getElementById("diceValue").value = diceResult;
}

document.getElementById("rollButton").addEventListener("click", rollDice);