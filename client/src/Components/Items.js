import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Card, Image} from 'semantic-ui-react'

const Items = () => {
  const [items, setItems] = useState([])

  useEffect(()=>{
    axios.get(`https://fortnite-public-api.theapinetwork.com/store/get`)
    .then(res=> {setItems(res.data.items)})
  },
  [], console.log(items))

  const ItemDisplay =({name, image, description})=>(
    <Card>
      <Image src={image}></Image>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  )

  return(
    <>
    <Card.Group itemsPerRow={4}>
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