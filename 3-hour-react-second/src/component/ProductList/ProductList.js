
import React, { useState } from "react";
import CartContext from "../../store/create-context";
import { useContext } from "react";
const ProductList = (props) => {

 console.log("re render productlit")



  const cartCtx=useContext(CartContext)
    
  const submitHandler=(e)=>{
     const clickedProduct=props.productItem.find(item=>{
      return item.id===(+e.target.parentElement.id)})
     console.log(clickedProduct)
      
       let item=document.getElementById(e.target.id).innerHTML     
          

let type,large,medium,small
if(item.includes('L') && clickedProduct.large!==0 )
{
  type='large'
medium=0
small=0
large=1
clickedProduct.large=clickedProduct.large-1
}
else if(item.includes('M') && clickedProduct.medium!==0)
{
  type='medium'
  large=0
  small=0
  medium=1
  clickedProduct.medium=clickedProduct.medium-1
}
else if(item.includes('S') && clickedProduct.small!==0){
type='small'
large=0
medium=0
small=1
clickedProduct.small=clickedProduct.small-1
}
else
return

    cartCtx.addItem({
      id:e.target.id,
      shoeName: clickedProduct.shoeName,
          description:clickedProduct.description,
          price: clickedProduct.price,
          large: large,
          medium: medium,
          small: small,
          type:type,
          amount:1
          

    })

   
  console.log(small)

  }
  const products=props.productItem.map((product) => (
        
    
    <li key={product.id} id={product.id}>
      {product.shoeName}--{product.description}--{product.price}
      {console.log(product.id)}
      <button type='button' onClick={submitHandler} id={product.id+'L'}>{`L-- ${product.large}`}</button>
      <button type='button' onClick={submitHandler} id={product.id+'M'} >{`M-- ${product.medium}  `}</button>
      <button type='button'  onClick={submitHandler}  id={product.id+'S'} >{`S--${product.small}`}</button>
    </li>

  ))
  //const deleteHandler=(e)=>{
//e.target.parentElement.remove()  
//props.deleteAndUpdateAmount(e.target.id)

  //  }

    return(
      <div>
        <h2>Product</h2>
        
    <ul>
      {products}
    </ul>
  
    </div>
    )
  };
  
  export default ProductList;