//const ul=document.querySelector('.items');

//ul.firstElementChild.innerText='Hello';
//ul.firstElementChild.style.color='green';

//ul.children[1].style.color="yellow";

const button=document.querySelector('.btn');

//button.addEventListener('click',(e)=>{
   // e.preventDefault();
//});

button.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='red';
});

button.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='green';
});


const myform=document.querySelector('#my-form');
//console.log(form);
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
//console.log(msg);
const userList=document.querySelector('#users');

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
console.log('get it');
e.preventDefault();

if(nameInput.value==='' || emailInput.value===''){
   
    msg.innerHTML='Please fil properly';

    setTimeout(()=>msg.remove(),3000);
}

else{
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(
        `${nameInput.value} : ${emailInput.value}`
    ));
    userList.appendChild(li);
    nameInput.value='';
    emailInput.value='';


}
}