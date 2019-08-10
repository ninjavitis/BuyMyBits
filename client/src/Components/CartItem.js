import React,{useContext} from 'react';
import {Item, Button} from 'semantic-ui-react'
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
          <Item.Meta>
            Quantity: {cart[cartIndex].quant}
            <Button icon='minus' size='mini' color='grey' onClick={()=>updateQuantity(cartIndex, -1)} /> 
            <Button icon='plus' size='mini' color='grey' onClick={()=>updateQuantity(cartIndex, 1)} /> 
            </Item.Meta>
          <Item.Extra>
          </Item.Extra> 
        </Item.Content>
          <Button icon='cancel' size='mini' onClick={()=>removeFromCart(items[item].itemid)} /> 
      </Item>
    </>
  )
}
export default CartItem;