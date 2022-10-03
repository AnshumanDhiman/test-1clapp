import React from "react";
import './Cart.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cart_text = "Cart is Empty";

function Cart() {
    return (
    <>
 <div className="cart_bar">
<div className="container">
    <h3 className="cart_h3">Cart </h3>
    <hr/>
   <ShoppingCartIcon style={{height:'9rem', width:'8rem', marginLeft :'4rem'}}/>
    <p className="cart_p">{Cart_text}</p>
</div>
 </div>

    </>
    )
}

export default Cart;