import React, {useContext} from 'react';
import {Menu, Segment} from 'semantic-ui-react'
import Cart from './Cart'
import {ShopContext} from '../Providers/ShopProvider'

// Stripe 
import {Elements} from 'react-stripe-elements';
import PaymentForm from './PaymentForm'



const Checkout = () => {
  const Progress = (
    <Menu>
      <Menu.Item>Cart</Menu.Item>
      <Menu.Item>Complete</Menu.Item>
    </Menu>
  )

  return (
    <Segment  >
      {console.log('checkout')}
      {Progress}
      <Cart />
    </Segment>
  );
}

export default Checkout;