import React, { useState } from 'react';
import CartForm from './components/CartForm/CartForm';
import ProductList from './components/ProductList/ProductList';


function App() {

  const[userList,setUserList]=useState([])
  const[sum,updatedsum]=useState(0)

  const addHandler=(productId,sellingPrice,productName)=>{

    setUserList((prevList)=>{
    console.log(prevList)
    return[...prevList,{price:sellingPrice,name:productName,id:productId}]

    
    })
  }
    const totalHandler=(sellingPrice)=>{
    updatedsum((prevSum)=>{
    prevSum=prevSum+sellingPrice
    return prevSum
    })
    }
   
    const updateAmount=(id)=>{
      
      updatedsum((prevSum)=>{
       const user= userList.find(user => user.id === id);
       
        prevSum=Math.abs(prevSum-user.price)
        console.log(prevSum)
        return prevSum
        })

    }



  return (
    <div>
   <CartForm onAddUser={addHandler} totalCalculator={totalHandler} />
   <ProductList users={userList}  totalamount={sum} deleteAndUpdateAmount={updateAmount} />
   
    </div>
  );
}

export default App;
