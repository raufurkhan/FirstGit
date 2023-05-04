//parentNode
var itemList=document.querySelector('#items')
itemList.parentNode.style.backgroundColor="orange"
console.log(itemList.parentNode);

//parentElement
itemList.parentElement.style.backgroundColor="grey"
console.log(itemList.parentElement);
//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello1'

//lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);

itemList.previousElementSibling.style.color='yellow';


var newDiv=document.createElement('div');

newDiv.className='hello';
newDiv.id='hellow1';
newDiv.setAttribute('title','nayaDiv');

var newDivText=document.createTextNode('Hello');

newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector( 'header h1');

console.log(newDiv);
container.insertBefore(newDiv,h1);









