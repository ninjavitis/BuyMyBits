import React,{useContext} from 'react';
import {Item, Button, Icon} from 'semantic-ui-react'
import {ShopContext} from '../Providers/ShopProvider'


const CartItem = ({item, cartIndex}) => {
  const {items, cart, updateQuantity, convertPrice, removeFromCart} = useContext(ShopContext)

  return(
    <>
      <Item>
        <Item.Image size='tiny' src={items[item].item.images.transparent}/>
        <Item.Content verticalAlign='middle'> 
          <Item.Header as='h3'>{items[item].name}</Item.Header>
          <Item.Meta>Quantity: {cart[cartIndex].quant}</Item.Meta>
          <Item.Meta>Unit Price: ${convertPrice(items[item].cost)}  </Item.Meta>
          <Item.Description>{items[item].item.description}</Item.Description>
          <Item.Extra>
            <Button icon='minus' size='mini' color='grey' onClick={()=>updateQuantity(cartIndex, -1)} /> 
            <Button icon='plus' size='mini' color='grey' onClick={()=>updateQuantity(cartIndex, 1)} /> 
          </Item.Extra> 
        </Item.Content>
          <Button icon='cancel' size='mini' color='red' onClick={()=>removeFromCart(items[item].itemid)} /> 
      </Item>
    </>
  )
}
export default CartItem;