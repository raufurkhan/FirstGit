console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.title="check it";
document.all[10].textContent='hello'

//let headerTitle=document.getElementById("header-title");
//headerTitle.style.borderBottom='solid 3px #000';
let header=document.getElementById("main-header");
console.log(header);
header.style.borderBottom='solid 3px #000';
let title=document.getElementsByClassName("title");
console.log(title[0]);
title[0].style.fontWeight='bold';
title[0].style.color='green';

// let items=document.getElementsByClassName("list-group-item");
// items[2].style.backgroundColor="green"

// for(let i=0;i<items.length;i++){
// items[i].style.fontWeight='bold'

// }


let li=document.getElementsByTagName("li");
li[2].style.backgroundColor="green"

for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold'

}


let secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green'
let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden'

let items=document.querySelectorAll('.list-group-item');
items[1].style.color='green'

let odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
let even=document.querySelectorAll('.list-group-item:nth-child(even)');

for(let i=0;i<odd.length;i++){

    odd[i].style.backgroundColor='green'
}
