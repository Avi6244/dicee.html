var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice"+ randomNumber1 +".png";
var randomSource = "images/" + randomImage;
var images = document.querySelectorAll("img")[0];
images.setAttribute("src", randomSource);
var randomNumber2 = Math.floor(Math.random() *6) + 1;
var randomSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomSource2);

var highestNumber = Math.max(randomNumber1, randomNumber2);

if (highestNumber === randomNumber1 && highestNumber % 2 !== 0) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉" ;
} else if (highestNumber === randomNumber2 && highestNumber % 2 === 0) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆 ";
} else {
    document.querySelector("h1").innerHTML = "Refresh 🤝";
}
    



