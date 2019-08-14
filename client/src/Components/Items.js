import React, {useContext} from 'react';
import {Card, Image, Button, Icon, Label,} from 'semantic-ui-react'
import {ShopContext} from '../Providers/ShopProvider'

const Items = () => {
  const {items, conversionRate, addToCart} = useContext(ShopContext)

  const ItemDisplay =({name,desc,image,cost,index, id})=>(
    <Card>
      <Image src={image}></Image>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{desc}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign='center'>
        <Button as='div' size='mini' labelPosition='left'>
          <Label basic pointing='right'>$ {(parseFloat(cost) / conversionRate).toFixed(2)}</Label>
          <Button icon size='mini' color='green' onClick={()=>addToCart(id)}><Icon name='dollar sign'/>Buy These Bits</Button>
        </Button>
      </Card.Content>
    </Card>
  )

  return(
    <Card.Group stackable itemsPerRow={5}>
      {items.map((item,i)=><ItemDisplay 
        key={item.itemid}
        id={item.itemid}
        index={i}
        name={item.name}
        desc={item.description}
        image={item.item.images.transparent}
        cost={item.cost}
        
      />)}
    </Card.Group>

  )
}

export default Items;