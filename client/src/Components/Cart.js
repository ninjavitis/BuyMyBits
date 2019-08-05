import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {Segment, Divider, Item, Button, Header, Icon} from 'semantic-ui-react'
import CartItem from './CartItem'
import {ShopContext} from '../Providers/ShopProvider'

const FloatingCart = () => {
  const {items,cart, totalQuantity, deliveryFee, subTotal, Total} = useContext(ShopContext)


  const itemPane = (
    <>
      <Header as='h1'>Cart</Header>
      <Segment style={{overflow: 'auto', maxHeight: '50vh' }}>
        <Item.Group divided>
          {cart.map((cItem,i)=><CartItem key={items[cItem.item].itemid} item={cItem.item} cartIndex={i}/>)}
        </Item.Group>
        <Divider />  
      </Segment>
      <Segment textAlign='right'>
        <h4>
          Sub-total: ${subTotal().toFixed(2)}
        </h4>
        <h4>
          Digital Delivery Fee / Item: ${(deliveryFee() / totalQuantity()).toFixed(2)} 
        </h4>
        <h5>
          (${deliveryFee().toFixed(2)})
        </h5>
        <h3>
          Total: ${Total().toFixed(2)}
        </h3>
      </Segment>
      <Segment textAlign='right'>
        <Button color='green'>Checkout</Button>
      </Segment>
    </>
  )


  const emptyCart = (
    <Segment placeholder>
      <Header icon textAlign="center">
      <Icon name='box'/>
        Your cart is empty, add some bits!
      </Header>
      <Link to="/">
        <Button color='blue'>Take me to the bits!</Button>
      </Link>
    </Segment>
  )

  return(
    <Segment style={{maxHeight: '90vh' }}>
      {cart.length > 0?
        itemPane
        :
        emptyCart
      }
    </Segment>
  )
};

export default FloatingCart;