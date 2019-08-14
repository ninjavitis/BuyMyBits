import React,{useContext} from 'react';
import {Item, Button, Label} from 'semantic-ui-react'
import {ShopContext} from '../Providers/ShopProvider'


const CartItem = ({item, cartIndex}) => {
  const {items, cart, updateQuantity, convertPrice, removeFromCart, findInItems} = useContext(ShopContext)

  return(
    <>
      <Item>
        <Item.Image size='tiny' src={items[findInItems(item)].item.images.transparent}/>
        <Item.Content verticalAlign='middle'> 
          <Item.Header as='h3'>{items[findInItems(item)].name}</Item.Header>
          <Item.Meta>Unit Price: ${convertPrice(items[findInItems(item)].cost)}  </Item.Meta>
            <Button size='mini' color='grey' attached='left' onClick={()=>updateQuantity(cartIndex, -1)}>
              -
            </Button> 
            <Label>Quantity: {cart[cartIndex].quant}</Label>
            <Button size='mini' color='grey' attached='right' onClick={()=>updateQuantity(cartIndex, 1)}>
            +
            </Button>
        </Item.Content>
          <Button icon='cancel' size='mini' onClick={()=>removeFromCart(item.item)} /> 
      </Item>
    </>
  )
}
export default CartItem;