
import classes from './Cart.module.css'
import CartItem from './CartItem'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/create-context'
const Cart=props=>{
   const cartCtx=useContext(CartContext)
   const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
   const hasItems= cartCtx.items.length>0

const cartItemRemoveHandler=(id)=>{

    cartCtx.removeItem(id)
}

const cartItemAddHandler=(item)=>{

    cartCtx.addItem({...item,amount:1})
}
const cartItems=(
<ul className={classes['cart-items']}>
{cartCtx.items.map((item)=> (
<CartItem  
key={item.id}
shoeName={item.shoeName}
amount={item.amount}
price={item.price}
large={item.large}
medium={item.medium}
small={item.small}
onRemove={cartItemRemoveHandler.bind(null,item.id)}
onAdd={cartItemAddHandler.bind(null,item)}

/>



))}
</ul>
)
    return (
<Modal onClose={props.onClose}>
{cartItems}
<div className={classes.total}>
    <span>Total amount</span>
    <span>{totalAmount}</span>
</div>
<div className={classes.actions}> 
<button className={classes['button-alt']} onClick={props.onClose}>Close</button>
   { hasItems && <button className={classes.button}> Order</button>}
       
    </div>
</Modal>



    )

}
export default Cart