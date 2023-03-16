let form=document.getElementById('addForm');
let itemList=document.getElementById('items');



form.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem);

function addItem(e){

    e.preventDefault();

    var item=document.getElementById('item').value;

    var li=document.createElement('li');
    
    li.className="list-group-item";

    textNode=document.createTextNode(item);

    li.appendChild(textNode);

    var deleteBtn=document.createElement('button')

    deleteBtn.className="btn btn-danger btn-sm float-right delete"

    deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);


}

function removeItem(e){

    if(e.target.classList.contains('delete')){

        if(confirm('Are you sure')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }



}