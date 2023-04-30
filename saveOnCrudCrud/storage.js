
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
       //obj_serialize=JSON.stringify(obj);
       //localStorage.setItem(email.value,obj_serialize);
       //console.log(obj_serialize);
       axios.post("https://crudcrud.com/api/69cfb8693a274930945d63bfeee50cc3/appointmentData",obj).then(response=>showUserOnScreen(response.data))
       .catch(err=>{
        document.body.innerHTML=document.body.innerHTML +"<h4> something went wrong</h4>"
        console.log(err)})   
       
   
       //let obj_deserialize=JSON.parse(localStorage.getItem('myobj'));
      //console.log(obj_deserialize)
      //showUserOnScreen(obj);
      

      // let li=document.createElement('li');
           
           // li.appendChild(document.createTextNode(username.value))
            //li.appendChild(document.createTextNode("----"))
            //li.appendChild(document.createTextNode(email.value))

            //listofusers.appendChild(li);
}

window.addEventListener("DOMContentLoaded",()=>{

    axios.get("https://crudcrud.com/api/69cfb8693a274930945d63bfeee50cc3/appointmentData").then(respone=>{
    
    for(var i=0;i<respone.data.length;i++){
    showUserOnScreen(respone.data[i])
}
})
    .catch(err=>console.log(err))
})

function showUserOnScreen(obj){
 
    let parent=document.getElementById('listofusers');
    let child=document.createElement('li');
    
    child.textContent=obj.name+ " "+ obj.email

    const deleteButton=document.createElement('input')
    deleteButton.type="button";
    deleteButton.value='delete'


    const editButton=document.createElement('input')
    editButton.type="button";
    editButton.value='Edit'
    editButton.onclick= (e) =>{
        localStorage.removeItem(obj.email)
        parent.removeChild(child);
        document.getElementById("name").value=obj.name;
        document.getElementById("email").value=obj.email;
         }

    deleteButton.onclick= (e) =>{
   localStorage.removeItem(obj.email)
   parent.removeChild(child);

    }
    child.appendChild(deleteButton);
    child.appendChild(editButton);
   parent.appendChild(child);
}