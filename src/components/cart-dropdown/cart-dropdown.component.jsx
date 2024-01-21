import React from 'react'
import './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selectors.js'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()
  
  const goToCheckoutHandler = () => {
    navigate("/checkout")
  }

  return (
    <CartDropdownContainer >
        <CartItems >
          {
            cartItems.length 
            ?
            cartItems.map(item => (
              <CartItem key={item.id} cartItem={item}/>
            ))
            :
            <EmptyMessage>Корзина пуста</EmptyMessage>
          }
        </CartItems>
        <Button onClick={goToCheckoutHandler}>В корзину</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown