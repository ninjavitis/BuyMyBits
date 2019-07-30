import React, {useContext} from 'react';
import {Segment, Divider, Item} from 'semantic-ui-react'
import CartItem from './CartItem'
import {ShopContext} from '../Providers/ShopProvider'

const FloatingCart = () => {
  const {cart, subTotal} = useContext(ShopContext)



  return(
    <Segment>
      <h1>Cart</h1>
      <Divider />
      <Item.Group>
        {cart.map((item)=><CartItem key={item} item={item}/>)}
      </Item.Group>
      <Divider />
      <h4>
        Sub-total: ${subTotal()}
      </h4>
      <h4>
        Shipping: Free!
      </h4>
      <h3>

      </h3>
    </Segment>
  )
};

export default FloatingCart;