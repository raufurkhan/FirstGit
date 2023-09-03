
import { Fragment } from "react"
import classes from './Header.module.css'

import HeaderCartButton from './HeaderCartButton'

const Header=(props)=>{

return(
<Fragment>

<header className={classes.header}>
<h2>Shoe e-commerce </h2>
<HeaderCartButton onClick={props.onShowCart}/>
</header>



</Fragment>


) 

}
export default Header