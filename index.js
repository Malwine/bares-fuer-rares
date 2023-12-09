let form = document.getElementById("inputContainer");
let itemList = document.getElementById("items");
let items = [];
let id = 0;
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
        itemData["id"] = id;
        itemData["itemName"] = itemName.value;
        itemData["exMin"] = exMin.value;
        itemData["exMax"] = exMax.value;
        itemData["firstGuess"] = firstGuess.value;
        itemData["secondGuess"] = secondGuess.value;
        itemData["sold"] = sold.checked;
        itemData["soldPrice"] = soldPrice.value;
        items.push(itemData);
        renderItems();
        id++;
    } else {
        message.innerHTML = "Eingabe ungültig";
        console.log("Could not create item")
    }
}

let clearForm = () => {
    form.reset();
}

/* 
 *  This function deletes the given item from UI and items array. 
 */
function deleteItem(itemId) {
    // Remove item from user interface
    let itemToDelete = document.getElementById(itemId);
    itemToDelete.remove();

    // Remove item from items array
    for(let i = 0; i < items.length; i++){ // loop items to find object
        if (items[i].id == itemId){
            console.log("items array before removing:");
            console.log(items);
            items.splice(i, 1); 
            console.log("items array after removing:")
            console.log(items);
            break;
        }
    }
}

let renderItems = () => {
    if(items.length-1 >= 0) {
        let lastItem = items[items.length-1];
        console.log("Füge hinzu: ", lastItem)
        itemList.innerHTML +=
            `<div class="item" id="${lastItem.id}">
                <div class="itemName">${lastItem.itemName}</div>
                <div class="expertisePrice">${lastItem.exMin} - ${lastItem.exMax}</div>
                <div class="firstGuess">${lastItem.firstGuess}</div>
                <div class="secondGuess">${lastItem.secondGuess}</div>
                <div class="sold">${ lastItem.sold ? "<i class=\"fas fa-check-square\"></i>" : "<i class=\"fas fa-minus-square\"></i>" }</div>
                <div class="soldPrice">${lastItem.sold ? lastItem.soldPrice : "-"}</div>
                <div class="options">
                    <button class="fas fa-edit" id="${lastItem.id}" type="submit"></button>
                    <button class="fas fa-trash-alt" id="${lastItem.id}" onclick="deleteItem(this.id)"></button>
                </div>
            </div>`;
        clearForm();
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    acceptData();
})
