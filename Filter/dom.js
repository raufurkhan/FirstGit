let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');



form.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function addItem(e){

    e.preventDefault();

    let item=document.getElementById('item').value;
    let desc=document.getElementById("description").value;

    var li=document.createElement('li');
    
    li.className="list-group-item";

    let textNode=document.createTextNode(item);
    let descNode=document.createTextNode(desc);


    li.appendChild(textNode);
    li.appendChild(descNode);

    let deleteBtn=document.createElement('button')

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

function filterItems(e){

   let text= e.target.value.toLowerCase();
   console.log(text);

   let items=itemList.getElementsByTagName('li');
   console.log(items);

   Array.from(items).forEach(function(item){
   // <li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
   let itemName=item.firstChild.textContent
   let desc=item.childNodes[1].textContent
   //let c=item.childNodes[2]
   //console.log(c)
   if(itemName.toLowerCase().indexOf(text) != -1 || desc.toLowerCase().indexOf(text) != -1){
   item.style.display='block';
}
else
item.style.display='none';
   })







}