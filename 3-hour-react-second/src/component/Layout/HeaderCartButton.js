import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/create-context'


const HeaderCartButton=(props)=>{

  const cartCtx=useContext(CartContext)
  console.log("check 1")
  let amount=1
  const numberOfCartItem=cartCtx.items.reduce((cartNumber,item)=>{

    return cartNumber + item.amount
  },0)

return (
<button className={classes.button} onClick={props.onClick}>
<span className={classes.icon}>
 <CartIcon/>
</span>
<span> Your Cart</span>
<span className={classes.badge}>{numberOfCartItem}</span>

</button>



    )


}
export default HeaderCartButton