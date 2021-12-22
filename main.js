var itemList = document.querySelector ( '#items');

// parentNode

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// console.log(itemlist.parentNode.parentNode.parentNode);

// parentElement

// console.log(itemlist.parentElement);

// itemList.parentElement.style.backgroundColor= '#f4f4f4';

// console.log(itemList.parentElement.parentElement.parentElement

5 // childNodes

// console.log(itemList.childNodes);

//console.log(itemList.children); console.log(itemList.children[1]); 
//itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild

console.log(itemList.firstChild);

5 // firstElementChild

console.log(itemlist.firstElementChild);

 itemlist.firstElementChild.textContent = 'Hello 1';

// lastChild

// console.log(itemlist.lastChild); // lastElementChild

// console.log(itemList.lastElementChild); // itemlist.lastElementChild.textContent = 'Hello 4';

// nextSibling

// console.log(itemList.nextSibling);

// // nextElementSibling

// console.log(itemList.nextElementSibling);

// previousSibling

// console.log(itemList.previousSibling); // previous ElementSibling

// console.log(itemList.previous ElementSibling); itemList.previous ElementSibling.style.color = 'green';

// createElement

// Create a div

var newDiv = document.createElement('div');

// Add class

newDiv.className= 'hello';

// Add id

newDiv.id = 'hellol';

// Add attr

newDiv.setAttribute('title', 'Hello Div');

// Create text node

var newDivText = document.createTextNode('Hello World');

// Add text to div

newDiv.appendChild (newDivText);

var container = document.querySelector('header .container'); var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, hl);

