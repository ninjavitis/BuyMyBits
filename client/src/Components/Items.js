import React, {useContext} from 'react';
import {Card, Image, Button, Icon, Label,Segment, Header} from 'semantic-ui-react'
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
          <Label basic pointing='right'>$ {parseFloat(cost).toFixed(2)}</Label>
          <Button icon size='mini' color='green' onClick={()=>addToCart(id)}><Icon name='dollar sign'/>Buy These Bits</Button>
        </Button>
      </Card.Content>
    </Card>
  )

  const RenderItems =()=>{
      if(items && items.length > 0){
        return(
          <Card.Group stackable itemsPerRow={5}>
            {items.map((item,i)=>
              <ItemDisplay 
                key={item.id}
                id={item.id}
                index={i}
                name={item.name}
                desc={item.description}
                image={item.image}
                cost={item.cost}
              />
            )}
          </Card.Group>
        )
      } else {
        return(
          <Segment placeholder>
            <Header icon color='red' textAlign="center">
            <Icon name='x'/>
              No Items Found! - this probably means the db hasn't been seeded or the Fortnite API is down.
              <br/>
              As of 9/22 the Fortnite API is offline with no word from the maintainer as to when it will be restored.
              Since the datastructure of the cart is built around the object retrieved from the API Buy My Bits will currently only function in INTERNAL mode.
              <br />
              Try setting the data source to 'external' above.
            </Header>
          </Segment>
        )
      }
  }

  return(
      <RenderItems/>
  )
}

export default Items;