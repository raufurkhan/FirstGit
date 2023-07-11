
import React from "react";
const ProductList = (props) => {

    
    
   
  const deleteHandler=(e)=>{
e.target.parentElement.remove()  
props.deleteAndUpdateAmount(e.target.id)

    }

    return(
      <div>
        <h2>Product</h2>
    <ul>
      {props.users.map((user) => (
        
        <li key={user.id}>
          {user.price}--{user.name}
          <button type='button' id={user.id} onClick={deleteHandler}>Delete item</button>
        </li>

      ))}
    </ul>
   <div>Total value worth of Product Rs {props.totalamount}</div>
    </div>
    )
  };
  
  export default ProductList;