
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
       localStorage.setItem(email.value,obj_serialize);
       console.log(obj_serialize);
   
       
   
       let obj_deserialize=JSON.parse(localStorage.getItem('myobj'));
      console.log(obj_deserialize)
      showUserOnScreen(obj);
      

      // let li=document.createElement('li');
           
           // li.appendChild(document.createTextNode(username.value))
            //li.appendChild(document.createTextNode("----"))
            //li.appendChild(document.createTextNode(email.value))

            //listofusers.appendChild(li);
}

function showUserOnScreen(obj){
    let parent=document.getElementById('listofusers');
    let child=document.createElement('li');
    
    child.textContent=obj.name+ " "+ obj.email

    const deleteButton=document.createElement('input')
    deleteButton.type="button";
    deleteButton.value='delete'

    deleteButton.onclick= (e) =>{
   localStorage.removeItem(obj.email)
   parent.removeChild(child);

    }
    child.appendChild(deleteButton);
   parent.appendChild(child);
}