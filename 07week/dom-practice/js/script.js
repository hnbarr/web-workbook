'use strict';

window.onload=function() {
  let listTotal = document.getElementsByTagName('ul');
  let message = listTotal[0].children.length;
    // alert(message);
  let h2baby = document.createElement('h2');
    h2baby.innerHTML = "You have " + listTotal[0].children.length + " items in your shopping cart.";
    document.getElementsByTagName('h1')[0].after(h2baby);

  // create ability to add more items to list
  createNewField()
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

  // addItemsToExistingList()
  function addItemsToExistingList(event){
    let userInput = document.getElementById('item-text').value;
    let textVal = document.createElement('li');
    textVal.innerHTML = userInput;
    document.getElementById('test').appendChild(textVal);
    

    // document.getElementsByTagName('ul').innerHTML = userInput;
    // let keyWord = document.createTextNode(userInput).value;
    // // textVal.appendChild(keyWord);
    // textVal.appendChild(keyWord);
    // document.getElementsByTagName('li')[0].after(userInput);
    // not working...
    // let textVal = document.getElementsByTagName('ul');
    // userInput.innerHTML=('textVal');
    // ul[0].innerHTML = ('userInput');
  } 
};
