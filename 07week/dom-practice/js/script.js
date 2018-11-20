'use strict';
// comand f to replace all names or classes

window.onload=function() {

  let listTotal = document.getElementsByTagName('ul');
  let message = listTotal[0].children.length;
  // alert(message);
  // uncomment line 8 to activate alert.


  // calling all functions onload.
  createNewField();
  addingButtonToList();
  itemCount();
  updateItemCount();

};
// Items in Cart Statement.
function itemCount(){
  let h2baby = document.createElement('h2');
  h2baby.setAttribute("id", "title");
  document.getElementsByTagName('h1')[0].after(h2baby);
}

function updateListCountSentance(){
  let newList = document.getElementById('list');
  return "You have " + newList.children.length + " items in your shopping cart.";
}

function updateItemCount(){
  let update = updateListCountSentance();
  let string = document.getElementById('title');
  string.innerHTML = update; 
}

// text box and button to add
function createNewField(){
  let newInput = document.createElement('input');
    newInput.setAttribute("id", 'item-text');
    document.getElementsByTagName('ul')[0].after(newInput);
    newInput.setAttribute("placeholder", "Type to Add Item");
  let addbutton = document.createElement('button');
    addbutton.setAttribute("id", 'new-button');
    document.getElementById('item-text').after(addbutton);
    addbutton.innerHTML = "Add To Cart";
    addbutton.onclick = addItemsToExistingList;
}

// add items to my list()
function addItemsToExistingList(event){
  let userInput = document.getElementById('item-text').value;
  let textVal = document.createElement('li');
    textVal.innerHTML = userInput;
    document.getElementById('list').appendChild(textVal);
  deleteButtonByEachLi(textVal);
  updateItemCount();
}

//  create button on exitsing and new li's with forloop
function deleteButtonByEachLi(appendElement){
  let removeButton = document.createElement('button');
    removeButton.setAttribute("id", "li-bye-bye");
    removeButton.innerHTML = "Delete";
    appendElement.appendChild(removeButton);
    removeButton.onclick = deleteItem; 
  }
function addingButtonToList(){
  let list = document.getElementById('list');
    for(let i=0; i < list.children.length; i++){
  deleteButtonByEachLi(list.children[i]);
    }
  }
 
// removing the li once Delete Button clicked
function deleteItem() {
  this.parentNode.remove(this);
  updateItemCount();

}