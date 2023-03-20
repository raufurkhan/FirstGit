
const myform=document.querySelector('#my-form');
let username=document.getElementById('name');
let email=document.getElementById('email');


localStorage.setItem('email',email);

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(username.value);
    
   // localStorage.setItem('name',username.value);
    //localStorage.setItem('email',email.value);

    let obj={
        name: username.value,
        email: email.value
   
       }
       obj_serialize=JSON.stringify(obj);
       localStorage.setItem('myobj',obj_serialize);
       console.log(obj_serialize);
   
       
   
       let obj_deserialize=JSON.parse(localStorage.getItem('myobj'));
       console.log(obj_deserialize)
   
}