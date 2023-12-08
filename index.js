let form = document.getElementById("inputContainer");
let itemList = document.getElementById("items");
let items = [];
let itemName = document.getElementById("itemName");
let exMin = document.getElementById("exMin");
let exMax = document.getElementById("exMax");
let firstGuess = document.getElementById("firstGuess");
let secondGuess = document.getElementById("secondGuess");
let sold = document.getElementById("sold");
let soldPrice = document.getElementById("soldPrice");
let message = document.getElementById("message");

let acceptData = () => {
    if (itemName.value !== "") {
        let itemData = {};
        itemData["itemName"] = itemName.value;
        itemData["exMin"] = exMin.value;
        itemData["exMax"] = exMax.value;
        itemData["firstGuess"] = firstGuess.value;
        itemData["secondGuess"] = secondGuess.value;
        itemData["sold"] = sold.checked;
        itemData["soldPrice"] = soldPrice.value;
        items.push(itemData);
    }
}

let clearForm = () => {
    form.reset();
}

let renderItems = () => {
    if(items.length-1 > 0) {
        let lastItem = items[items.length-1];
        itemList.innerHTML +=
            `<div class="item">
                <div class="itemName">${lastItem.itemName}</div>
                <div class="expertisePrice">${lastItem.exMin} - ${lastItem.exMax}</div>
                <div class="firstGuess">${lastItem.firstGuess}</div>
                <div class="secondGuess">${lastItem.secondGuess}</div>
                <div class="sold">${ lastItem.sold ? "<i class=\"fas fa-check-square\"></i>" : "<i class=\"fas fa-minus-square\"></i>" }</div>
                <div class="soldPrice">${lastItem.sold ? lastItem.soldPrice : "-"}</div>
                <div class="options">
                <div class="fas fa-edit"></div>
                <div class="fas fa-trash-alt"></div>
                </div>
            </div>`;
        clearForm();
    } else {
        message.innerHTML = "Eingabe ungültig";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    acceptData();
    renderItems();
})
