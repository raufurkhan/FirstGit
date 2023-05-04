const myform=document.querySelector('#my-form');
let price=document.getElementById('price');
let dish=document.getElementById('dish');
let table=document.getElementById('category');
//let userEditId = null
let parent=null

//localStorage.setItem('email',email);
window.addEventListener("DOMContentLoaded",()=>{

    axios.get("https://crudcrud.com/api/000ae18a41bc4dbe97d980491327da4d/appointmentData").then(respone=>{
    
    for(var i=0;i<respone.data.length;i++){
    showUserOnScreen(respone.data[i])
}
})
    .catch(err=>console.log(err))
})

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    
   // localStorage.setItem('name',username.value);
    //localStorage.setItem('email',email.value);

    const obj={
        expense: price.value,
        description: dish.value,
        category: table.value
       }
      
      

       axios.post("https://crudcrud.com/api/000ae18a41bc4dbe97d980491327da4d/appointmentData",obj).then(response=>
       {
        showUserOnScreen(response.data)
    })
       .catch(err=>{
        document.body.innerHTML=document.body.innerHTML +"<h4> something went wrong</h4>"
        console.log(err)})
       }
        
       
      // obj_serialize=JSON.stringify(obj);
       //localStorage.setItem(description.value,obj_serialize);
       //console.log(obj_serialize);
   
       
   
       //let obj_deserialize=JSON.parse(localStorage.getItem('myobj'));
      //console.log(obj_deserialize)
      //showUserOnScreen(obj);
      


function showUserOnScreen(obj){



    if(obj.category==="table1")
    parent=document.getElementById("table1")
    else if(obj.category==="table2")
    parent=document.getElementById("table2")
    else
    parent=document.getElementById("table3") 
     
    console.log(table.value)


  
    let child=document.createElement('li');
    
    child.textContent=obj.expense+ " "+ obj.description+ " "+obj.category

    const deleteButton=document.createElement('input')
    deleteButton.className="btn btn-primary"
    deleteButton.type="button";
    deleteButton.value='delete'
    deleteButton.style='margin:5px'


    deleteButton.onclick= (e) =>{
        let a=obj._id
        axios.delete(`https://crudcrud.com/api/000ae18a41bc4dbe97d980491327da4d/appointmentData/${a}`).then(res=>{
         parent.removeChild(child)
     }).catch(err=>console.log(err))  

    }
    child.appendChild(deleteButton);
   parent.appendChild(child);
}
