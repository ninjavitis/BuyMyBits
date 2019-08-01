import React,{useContext} from 'react';
import {Item, Image, Button, Icon} from 'semantic-ui-react'
import {ShopContext} from '../Providers/ShopProvider'


const CartItem = ({item}) => {
  const {items, convertPrice, removeFromCart} = useContext(ShopContext)

  return(
    <>
      <Item>
        <Item.Image size='tiny' src={items[item].item.images.transparent}/>
        <Item.Content verticalAlign='middle'> 
          <Item.Header ><h3>{items[item].name}</h3></Item.Header>
          <Item.Meta>${convertPrice(items[item].cost)}</Item.Meta>
          <Item.Description>{items[item].item.description}</Item.Description>
          Quantity:
          <Button icon size='tiny' color='red' onClick={()=>removeFromCart(items[item].itemid)}><Icon name="trash"/></Button> 
        </Item.Content>
      </Item>
    </>
  )
}
export default CartItem;