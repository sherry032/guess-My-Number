'use strict';
// document.querySelector(".message").textContent = "correct number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
const radomNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector(".message").textContent = message
}
console.log(radomNumber)
document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    if(!guess){
        displayMessage("No number")
        console.log(document.querySelector(".guess").value)
    }else if(guess === radomNumber){
        displayMessage("Correct number")
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = radomNumber;
        document.querySelector(".number").style.width = "30rem";
        if(highscore <= score){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        
    }else if (guess !== radomNumber){
        if(score > 1){
            displayMessage(guess > radomNumber ? "Too high" : "Too low")
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            displayMessage("You lost the game");
            document.querySelector(".score").textContent = 0;
        }
    }
})
document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    displayMessage("Start guessing...")
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
})