import React from 'react';
import {Item, Image} from 'semantic-ui-react'

const CartItem = ({item}) => (
  <>
  <Item>
    <Item.Image size='tiny' src={item.item.item.images.transparent}/>
    <Item.Content verticalAlign='middle'>
      {item.item.name}
    </Item.Content>
  </Item>
  </>
);

export default CartItem;