import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Card, Image, Button, Icon, Label} from 'semantic-ui-react'

const Items = () => {
  const [items, setItems] = useState([])

  useEffect(()=>{
    axios.get(`https://fortnite-public-api.theapinetwork.com/store/get`)
    .then(res=> {setItems(res.data.items)})
  },
  [], console.log(items))

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
    <>
    <Card.Group stackable itemsPerRow={4}>
    {items.map((item)=><ItemDisplay 
      key={item.itemid}
      name={item.name} 
      image={item.item.images.transparent}
      description={item.item.description}
      cost={item.cost}
    />)}

    </Card.Group>
    </>
  )
}

export default Items;