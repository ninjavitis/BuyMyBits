import React from 'react';
import {Menu, Segment} from 'semantic-ui-react'
import Cart from './Cart'

// Stripe 
// import {Elements} from 'react-stripe-elements';
// import PaymentForm from './PaymentForm'



const Checkout = () => {
  const Progress = (
    <Menu>
      <Menu.Item>Cart</Menu.Item>
      <Menu.Item>Complete</Menu.Item>
    </Menu>
  )

  return (
    <Segment  >
      {Progress}
      <Cart />
    </Segment>
  );
}

export default Checkout;