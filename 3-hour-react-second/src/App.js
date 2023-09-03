import Cart from "./component/Cart/Cart";
import ProductForm from "./component/ProductForm/ProductForm";
import CartProvider from "./store/CartProvider";
import { useState } from "react";
import Header from "./component/Layout/Header";

function App() {
  const [cartIsShown,setCartShown]=useState(false)

  const showCardHandler=()=>{
    setCartShown(true)
  }
  
  const hideCardHandler=()=>{
    setCartShown(false)
  }
  
    return (
      <CartProvider>
    
        { cartIsShown && <Cart onClose={hideCardHandler}/>}
        <Header onShowCart={showCardHandler}></Header>
     
   <ProductForm  />
   </CartProvider>
   
    
  );
}

export default App;
