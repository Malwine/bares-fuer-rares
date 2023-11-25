let form = document.getElementById("inputContainer");
let itemData = {};
let itemName = document.getElementById("itemName");
let expertisePrice = document.getElementById("expertisePrice");
let firstGuess = document.getElementById("firstGuess");
let secondGuess = document.getElementById("secondGuess");
let sold = document.getElementById("sold");
let soldPrice = document.getElementById("soldPrice");
let winner = document.getElementById("winner");

let acceptData = () => {
    itemData["itemName"] = itemName.value;
    itemData["expertisePrice"] = expertisePrice.value;
    itemData["firstGuess"] = firstGuess.value;
    itemData["secondGuess"] = secondGuess.value;
    itemData["sold"] = sold.value;
    itemData["soldPrice"] = soldPrice.value;
    //itemData["winner"] = winner.value;
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    acceptData();
    console.log("save button clicked!")
    console.log(itemData);
})
