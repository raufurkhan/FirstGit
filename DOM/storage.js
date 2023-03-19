
const myform=document.querySelector('#my-form');
let username=document.getElementById('name');
let email=document.getElementById('email');


localStorage.setItem('email',email);

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(username.value);
    
    localStorage.setItem('name',username.value);
    localStorage.setItem('email',email.value);
   
}