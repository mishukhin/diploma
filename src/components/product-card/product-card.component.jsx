import React from 'react'
import './product-card.styles.jsx'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.actions'
import { selectCartItems } from '../../store/cart/cart.selectors'
import { AddToCardButton, Footer, Image, Name, Price, ProductCardContainer } from './product-card.styles.jsx'

const ProductCard = ({product}) => {
  const { name, price, imageUrl } = product
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
  return (
    <ProductCardContainer>
        <Image src={imageUrl} alt={`${name}`} />
        <Footer className='footer'>
            <Name className='name'>{name}</Name>
            <Price className='price'>{price}₽</Price>
        </Footer>
        <AddToCardButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>В корзину</AddToCardButton>
    </ProductCardContainer>
  )
}

export default ProductCard