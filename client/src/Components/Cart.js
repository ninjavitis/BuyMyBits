import React, {useState} from 'react';
import {Menu, Segment, Divider} from 'semantic-ui-react'
import {CartItem} from './CartItem'
import {ShopConsumer} from '../Providers/ShopProvider'

const FloatingCart = () => {
  const [cartItems, setCartItems] = useState()


  const getTotal=()=>{
    return(
      <></>
    )
  }

  return(
    <Segment>
      <h1>Cart</h1>
      <Divider />

      <Divider />
      <h4>
        Sub-total:
      </h4>
      <h4>
        Shipping: Free!
      </h4>
      <h3>
        Total{getTotal}
      </h3>
    </Segment>
  )
};

export default FloatingCart;