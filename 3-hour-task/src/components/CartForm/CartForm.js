import React,{useState} from "react";


const CartForm=(props)=>{


    const [enteredID, setEnteredProductID] = useState('');
    const [enteredSellingPrice, setSellingPrice] = useState('');
    const [enteredProductName,setProductName ] = useState('');



    const productIdChangeHandler=(e)=>{
        setEnteredProductID(e.target.value)
    }
    
    const priceChangeHandler=(e)=>{
    
        setSellingPrice(e.target.value)
    }
    
    const nameChangeHandler=(e)=>{
        setProductName(e.target.value)
    }

const addSubmitHandler=(e)=>{

    e.preventDefault();
   
    

   props.onAddUser(enteredID,enteredSellingPrice,enteredProductName)
   props.totalCalculator(+enteredSellingPrice)
   setEnteredProductID('')
   setSellingPrice('')
   setProductName('')

}


return(
<form onSubmit={addSubmitHandler} >
          <label htmlFor="productId">ProductID</label>
          <input
            type="text"
            id="productId"
            value={enteredID}
            onChange={productIdChangeHandler}
          ></input>
          <label htmlFor="sellingPrice">SellingPrice</label>
          <input
            type="number"
            id="sellingPrice"
            value={enteredSellingPrice}
            onChange={priceChangeHandler}
          ></input>
             <label htmlFor="productName">ProductName</label>
          <input
            type="text"
            id="productName"
            value={enteredProductName}
            onChange={nameChangeHandler}
          ></input>

          <button type="submit"> Add User</button>
        </form>
)



}

export default CartForm