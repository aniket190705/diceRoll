

var diceNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(diceNumber1);

var diceNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(diceNumber2);

if (diceNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}

if (diceNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}

if (diceNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}

if (diceNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}

if (diceNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}

if (diceNumber1 === 6) {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

//DICE 2

if (diceNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}

if (diceNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}

if (diceNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}

if (diceNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}

if (diceNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}

if (diceNumber2 === 6) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (diceNumber1 > diceNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";

}

else if (diceNumber1 < diceNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩"
}

else {
    document.querySelector("h1").textContent = "It's A Draw";

}




