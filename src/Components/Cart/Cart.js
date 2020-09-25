import React from 'react';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider';
import './Cart.css';
import { getBasketTotal } from '../Reducer/Reducer';
import { Link, useLocation } from 'react-router-dom';


const Cart = () => {
    const[{basket},dispatch] = useStateValue();
    const location = useLocation();
    return (
        <div className="cart" >
        <CurrencyFormat 
             renderText={(value)=>(
                <>
                  <p>
                    Items Ordered: {basket.length}
                  </p>
                    <p>
                    Subtotal( {basket.length} items):
                    <strong>{value}</strong>
                    </p>
                  
                </>
             )}
             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"$"}
        />
        <Link to={location.pathname==='/'?'/order-review':'/'}><button className="button"> {location.pathname==='/'?"Review Order":"Proceed to Checkout"}
         </button></Link>
            
        </div>
    );
};

export default Cart;