import React from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CheckoutBlock, CheckoutContainer, CheckoutHeader, CheckoutFoot, HeaderBlock, CheckoutTotal, CheckoutPayment } from './checkout.styles.jsx'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selectors.js'
import PaymentForm from '../../components/payment-form/payment-form.component'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock> 
            <th>Продукт</th>
            <th>Описание</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Удалить</th>
          </HeaderBlock>
        </CheckoutHeader>
        <CheckoutBlock>
          {cartItems.map(cartItem => {
            return (
              <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
          })}
        </CheckoutBlock>
        <CheckoutFoot>
          <CheckoutTotal>
            <td>
              <span className='value'>Всего: {cartTotal}$</span>
            </td>
          </CheckoutTotal>
          <CheckoutPayment >
            <td>
              <PaymentForm/>
            </td>
          </CheckoutPayment>
        </CheckoutFoot>
      </CheckoutContainer>
  )
}

export default Checkout