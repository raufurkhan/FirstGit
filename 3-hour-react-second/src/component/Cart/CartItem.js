import classes from './CartItem.module.css';

const CartItem = (props) => {
  //const price = `$${props.price.toFixed(2)}`;




  return (
    <li className={classes['cart-item']}>
      <div>
        
        {console.log(props.shoeName)}
        <div className={classes.summary}>
        <span> {props.shoeName}</span>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
          <span className={classes.size}>{props.large!==0 ?props.large+"L":""}{""}{props.medium!==0 ?props.medium+"M":""}{props.small!==0 ?props.small+'S':""}
           </span>
      
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
