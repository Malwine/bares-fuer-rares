let form = document.getElementById("inputContainer");
let itemData = {};
let itemName = document.getElementById("itemName");
let expertisePrice = document.getElementById("expertisePrice");
let firstGuess = document.getElementById("firstGuess");
let secondGuess = document.getElementById("secondGuess");
let sold = document.getElementById("sold");
let soldPrice = document.getElementById("soldPrice");
let winner = document.getElementById("winner");


form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    console.log("save button clicked!")

})