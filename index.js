let form = document.getElementById("inputContainer");
let itemList = document.getElementById("items");
let items = [];
let itemName = document.getElementById("itemName");
let expertisePrice = document.getElementById("expertisePrice");
let firstGuess = document.getElementById("firstGuess");
let secondGuess = document.getElementById("secondGuess");
let sold = document.getElementById("sold");
let soldPrice = document.getElementById("soldPrice");

let acceptData = () => {
    let itemData = {};
    itemData["itemName"] = itemName.value;
    itemData["expertisePrice"] = expertisePrice.value;
    itemData["firstGuess"] = firstGuess.value;
    itemData["secondGuess"] = secondGuess.value;
    itemData["sold"] = sold.checked;
    itemData["soldPrice"] = soldPrice.value;
    items.push(itemData);
}

let renderItems = () => {
    let lastItemIndex = items.length-1;
    itemList.innerHTML +=
        `<div class="item">
            <div class="itemName">${items[lastItemIndex].itemName}</div>
            <div class="expertisePrice">${items[lastItemIndex].expertisePrice}</div>
            <div class="firstGuess">ooo</div>
            <div class="secondGuess">ooo</div>
            <div class="sold"><i class="fas fa-check-square"></i></div>
            <div class="soldPrice">ooo</div>
            <div class="options">
            <div class="fas fa-edit"></div>
            <div class="fas fa-trash-alt"></div>
            </div>
        </div>`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    acceptData();
    renderItems();
})
