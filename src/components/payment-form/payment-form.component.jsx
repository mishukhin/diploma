import React, { useState } from 'react'
import { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { FormContainer, PaymentButton, PaymentFormContainer } from './payment-form.styles'
import { useSelector } from 'react-redux'
import { selectCartTotal } from '../../store/cart/cart.selectors'
import { selectCurrentUser } from "../../store/user/user.selector" 

const PaymentForm = () => {
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault()
    
    setIsProcessingPayment(true)

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },  
      body: JSON.stringify({ amount: amount * 100 })
    }).then(res => res.json())
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm