import React, {useContext} from 'react';
import {Card, Image, Button, Icon, Label,} from 'semantic-ui-react'
import {ShopContext} from '../Providers/ShopProvider'

const Items = () => {
  const {items, addToCart} = useContext(ShopContext)

  const ItemDisplay =(item)=>(
    <Card>
      <Image src={item.item.item.images.transparent}></Image>
      <Card.Content>
        <Card.Header>{item.item.name}</Card.Header>
        <Card.Description>{item.item.description}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='center'>
        <Button as='div' labelPosition='left'>
          <Label as='a' basic pointing='right'>$ {(parseFloat(item.item.cost) / 1000).toFixed(2)}</Label>
          <Button icon color='green' onClick={()=>addToCart(item)}><Icon name='dollar sign'/>Buy These Bits</Button>
        </Button>
      </Card.Content>
    </Card>
  )

  return(
    <Card.Group stackable itemsPerRow={4}>
      {items.map((item)=><ItemDisplay 
        key={item.itemid}
        item = {item}
      />)}
    </Card.Group>

  )
}

export default Items;