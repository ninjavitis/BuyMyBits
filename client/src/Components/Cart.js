import React, {useContext} from 'react';
import {Segment, Divider, Item} from 'semantic-ui-react'
import CartItem from './CartItem'
import {ShopContext} from '../Providers/ShopProvider'

const FloatingCart = () => {
  const {items,cart, totalQuantity, deliveryFee, subTotal, Total} = useContext(ShopContext)



  return(
    <Segment>
      <h1>Cart</h1>
      <Divider />
      <Item.Group>
        {cart.map((cItem,i)=><CartItem key={items[cItem.item].itemid} item={cItem.item} cartIndex={i}/>)}
      </Item.Group>
      <Divider />
      <Segment textAlign='right'>
        <h4>
          Sub-total: ${subTotal().toFixed(2)}
        </h4>
        <h4>
          Digital Delivery Fee / Item: ${(deliveryFee() / totalQuantity()).toFixed(2)} 
        </h4>
        <h5>
          (${deliveryFee().toFixed(2)})
        </h5>
        <h3>
          Total: ${Total().toFixed(2)}
        </h3>
      </Segment>
    </Segment>
  )
};

export default FloatingCart;