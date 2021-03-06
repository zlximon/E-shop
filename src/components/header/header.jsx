import React from 'react'
import './header.scss'
import {Link} from  'react-router-dom'
import { auth } from '../../firebase/firebase'
import  {ReactComponent as Logo} from '../../assests/logo.svg' 
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import {selectCartHidden} from '../../redux/user/user.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'

function Header({currentUser,hidden}) {
    return ( 
        <div className='header'>
            <Link to='/' className='logo-container' >
            <Logo className='logo' />
            </Link>
            <div className='options'>
            <Link className='option' to='/shop'>
            SHOP
             </Link>
              <Link className='option' to='/shop'>
               CONTACT
             </Link>
             {
                 currentUser ?
                <div className='option' onClick={()=>auth.signOut()}> sign out</div>
                :
               <Link className='option' to={'/signin'}>Sign in</Link>
             }
             <CartIcon/>
              </div>
           
{         
hidden? null:
<CartDropdown/>
}        </div>


     );
}
const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser ,
  hidden:selectCartHidden,
});

export default connect(mapStateToProps)(Header);