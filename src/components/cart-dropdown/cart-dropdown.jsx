import React from 'react';
import CustomButton from '../custom-button/custom-button'
import { connect } from 'react-redux';
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item';  
import {selectCartItems} from "../../redux/cart/cart-selector"
import { createStructuredSelector } from 'reselect'
function CartDropdown({cartItems}) {
    return ( 
        <div className='cart-dropdown'>
        <div className='cart-items'>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
     );
}
const mapStateToProps =createStructuredSelector ({
    cartItems:selectCartItems 
  });
export default connect(mapStateToProps)( CartDropdown);
  