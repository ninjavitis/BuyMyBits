import React, {useContext} from 'react';
import {Menu, Segment} from 'semantic-ui-react'
import Cart from './Cart'
import {ShopContext} from '../Providers/ShopProvider'

// Stripe 
import {Elements} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm'



const Checkout = () => {
  const {checkoutStep} = useContext(ShopContext)

  const Progress = (
    <Menu>
      <Menu.Item>Cart</Menu.Item>
      <Menu.Item>Shipping Info</Menu.Item>
      <Menu.Item>Billing Info</Menu.Item>
      <Menu.Item>Review</Menu.Item>
      <Menu.Item>Complete</Menu.Item>
    </Menu>
  )

  const StripeForm = ()=>{
    return(
      <Elements>
        <CheckoutForm />
      </Elements>
    )
  }

  const Main = ()=>{
    switch(checkoutStep){
      case 1: return <Cart />
      case 2: return <StripeForm />
      default: return null
    }
  }

  return (
    <Segment  >
      {Progress}
      <Main />
    </Segment>
  );
}

export default Checkout;