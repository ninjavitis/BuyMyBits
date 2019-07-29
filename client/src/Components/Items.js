import React, {useEffect, useState, useContext} from 'react';
import {Card, Image, Button, Icon, Label, Item} from 'semantic-ui-react'
import {ShopContext} from '../Providers/ShopProvider'

const Items = () => {
  const {items} = useContext(ShopContext)

  const ItemDisplay =({name, image, description, cost})=>(
    <Card>
      <Image src={image}></Image>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='center'>
        <Button as='div' labelPosition='left'>
          <Label as='a' basic pointing='right'>$ {(parseFloat(cost) / 1000).toFixed(2)}</Label>
          <Button icon color='green'><Icon name='dollar sign'/>Buy These Bits</Button>
        </Button>
      </Card.Content>
    </Card>
  )

  return(
    <Card.Group stackable itemsPerRow={4}>
      {items.map((item)=><ItemDisplay 
        key={item.itemid}
        name={item.name} 
        image={item.item.images.transparent}
        description={item.item.description}
        cost={item.cost}
      />)}
    </Card.Group>

  )
}

export default Items;