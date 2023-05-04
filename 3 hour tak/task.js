const myform=document.querySelector('#my-form');
let expense=document.getElementById('amount');
let description=document.getElementById('description');
let category=document.getElementById('category');


//localStorage.setItem('email',email);

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    
   // localStorage.setItem('name',username.value);
    //localStorage.setItem('email',email.value);

    let obj={
        expense: expense.value,
        description: description.value,
        category: category.value
       }
       obj_serialize=JSON.stringify(obj);
       localStorage.setItem(description.value,obj_serialize);
       console.log(obj_serialize);
   
       
   
       //let obj_deserialize=JSON.parse(localStorage.getItem('myobj'));
      //console.log(obj_deserialize)
      showUserOnScreen(obj);
      
}

function showUserOnScreen(obj){
    let parent=document.getElementById('listofexpenses');
    let child=document.createElement('li');
    
    child.textContent=obj.expense+ " "+ obj.description+ " "+obj.category

    const deleteButton=document.createElement('input')
    deleteButton.type="button";
    deleteButton.value='delete'


    const editButton=document.createElement('input')
    editButton.type="button";
    editButton.value='Edit'
    editButton.onclick= (e) =>{
        localStorage.removeItem(obj.description)
        parent.removeChild(child);
        document.getElementById("amount").value=obj.expense;
        document.getElementById("description").value=obj.description;
        document.getElementById("category").value=obj.category;
         }

    deleteButton.onclick= (e) =>{
   localStorage.removeItem(obj.description)
   parent.removeChild(child);

    }
    child.appendChild(deleteButton);
    child.appendChild(editButton);
   parent.appendChild(child);
}
