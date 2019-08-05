import React, {useState} from 'react';
import {Menu, Segment} from 'semantic-ui-react'
import Cart from './Cart'

const Checkout = () => {
  const [step, setStep] = useState(1)

  const Progress = (
    <Menu>
      <Menu.Item>Cart</Menu.Item>
      <Menu.Item>Shipping Info</Menu.Item>
      <Menu.Item>Billing Info</Menu.Item>
      <Menu.Item>Review</Menu.Item>
      <Menu.Item>Complete</Menu.Item>
    </Menu>
  )

  return (
    <Segment  >
      {Progress}
      <Cart/>

    </Segment>


  );
}

export default Checkout;