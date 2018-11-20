'use strict';

window.onload=function() {

  let listTotal = document.getElementsByTagName('ul');
  let message = listTotal[0].children.length;
  // alert(message);
  let h2baby = document.createElement('h2');
  h2baby.innerHTML = "You have " + listTotal[0].children.length + " items in your shopping cart.";
  document.getElementsByTagName('h1')[0].after(h2baby);

  // create ability to add more items to list
  createNewField();
  addingButtonToList();

};


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
}

//  append/create button on exitsing and new li's with forloop
function deleteButtonByEachLi(appendElement){
  let removeButton = document.createElement('button');
    removeButton.setAttribute("id", "li-bye-bye");
    removeButton.innerHTML = "Remove Item";
    appendElement.appendChild(removeButton);
  }

  function addingButtonToList(){
    let list = document.getElementById('test');
    for(let i=0; i < list.children.length; i++){
    deleteButtonByEachLi(list.children[i]);
    }
  }
 
// now to remove items from my list with onclick, like add button function.
