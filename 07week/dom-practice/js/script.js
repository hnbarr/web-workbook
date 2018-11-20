'use strict';

window.onload=function() {
  // alert user how many list items on page
  let listTotal = document.getElementsByTagName('ul');
  let message = listTotal[0].children.length;
    alert(message);

  // add h2 tag under title that says how many items in cart
  let h2baby = document.createElement('h2');
    h2baby.innerHTML = "You have " + listTotal[0].children.length + " items in your shopping cart.";
    document.getElementsByTagName('h1')[0].after(h2baby);

  // create ability to add more items to list
  createNewField();
  addItemsToExistingList();

  function createNewField(){
    let field = document.createElement('input');
      field.setAttribute("id", 'item-text');
      document.getElementsByTagName('ul')[0].after(field);
    let inputfield = document.getElementById('item-text');
      inputfield.setAttribute("placeholder", "Type to add Item");

    let addbutton = document.createElement('button');
      addbutton.setAttribute("id", 'new-button');
      document.getElementById('item-text').after(addbutton);
      addbutton.innerHTML = "add item";
      addbutton.onclick = addItemsExistingList;
  }

  function addItemsToExistingList(onclick){
    let userInput = document.getElementById('item-text').value;
    // attampt to add item-text as a li onclick.
    document.getElementsByTagName('li')[0].after(userInput);
    // not working...
    

  } 


};
