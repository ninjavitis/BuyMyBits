import React from 'react';
import {Menu, Section} from 'semantic-ui-react'

const Checkout = () => {

  const progress = (
    <Menu>
      <Menu.Item>Cart</Menu.Item>
      <Menu.Item>Shipping Address</Menu.Item>
      <Menu.Item>Billing Address</Menu.Item>
      <Menu.Item>Review</Menu.Item>
      <Menu.Item>Complete</Menu.Item>
    </Menu>
  )

  return (
    <Segment style={{overflow: 'auto', maxHeight: '90vh' }} >
      {progress}
    </>


  );
}

export default Checkout;