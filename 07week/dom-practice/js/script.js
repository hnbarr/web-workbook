'use strict';

window.onload=function() {

  let listTotal = document.getElementsByTagName('ul');
  let message = listTotal[0].children.length;
  // alert(message);


  // create ability to add more items to list
  createNewField();
  addingButtonToList();
  itemCount();
  updateItemCount();

};

function itemCount(){
  let h2baby = document.createElement('h2');
  h2baby.setAttribute("id", "title");
  document.getElementsByTagName('h1')[0].after(h2baby);
}

function updateListCountSentance(){
  let newTest = document.getElementById('test');
  return "You have " + newTest.children.length + " items in your shopping cart.";
}

function updateItemCount(){
  let update = updateListCountSentance();
  let string = document.getElementById('title');
  string.innerHTML = update; 
}

  

function createNewField(){
  let newInput = document.createElement('input');
    newInput.setAttribute("id", 'item-text');
    document.getElementsByTagName('ul')[0].after(newInput);
    newInput.setAttribute("placeholder", "Type to add Item");
  let addbutton = document.createElement('button');
    addbutton.setAttribute("id", 'new-button');
    document.getElementById('item-text').after(addbutton);
    addbutton.innerHTML = "add item";
    addbutton.onclick = addItemsToExistingList;
}

// add items to my list()
function addItemsToExistingList(event){
  let userInput = document.getElementById('item-text').value;
  let textVal = document.createElement('li');
  textVal.innerHTML = userInput;
  document.getElementById('test').appendChild(textVal);
  deleteButtonByEachLi(textVal);
  updateItemCount();
}

//  append/create button on exitsing and new li's with forloop
function deleteButtonByEachLi(appendElement){
  let removeButton = document.createElement('button');
    removeButton.setAttribute("id", "li-bye-bye");
    removeButton.innerHTML = "Remove Item";
    appendElement.appendChild(removeButton);


    removeButton.onclick = deleteItem;
  }

  function addingButtonToList(){
    let list = document.getElementById('test');
    for(let i=0; i < list.children.length; i++){
    deleteButtonByEachLi(list.children[i]);
    }
  }
 
// now to remove items from my list with onclick

  function deleteItem() {
  this.parentNode.remove(this);
  updateItemCount();

}