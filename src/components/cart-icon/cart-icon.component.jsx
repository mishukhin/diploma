import React from 'react'
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.actions.js'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selectors.js'

const CartIcon = () => {
  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
