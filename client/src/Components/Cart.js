import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {Segment, Divider, Item, Button, Header, Icon} from 'semantic-ui-react'
import CartItem from './CartItem'
import {ShopContext} from '../Providers/ShopProvider'
import StripeCheckout from 'react-stripe-checkout';


const FloatingCart = () => {
  const {
    items, 
    cart, 
    totalQuantity, 
    deliveryFee, 
    subTotal, 
    Total, 
    onToken,
  } = useContext(ShopContext)

  const StripeButton = ()=>{
    return(
        <StripeCheckout 
          amount={Total()*100}
          billingAddress
          description="TEST ONLY"
          locale="auto"
          name="DO NOT ENTER REAL INFO"
          stripeKey="pk_test_rX64QqpNMyGPDdHjzgkth56T00vFkUhTX2"
          token={onToken}
          zipcode
        />
    )
  }

  const itemPane = (
    <>
      <Header as='h1'>Cart</Header>
      <Segment style={{overflow: 'auto', maxHeight: '40vh' }}>
        <Item.Group divided>
          {cart.map((cItem,i)=><CartItem key={items[cItem.item].itemid} item={cItem.item} cartIndex={i}/>)}
        </Item.Group>
        <Divider />  
      </Segment>
      <Segment textAlign='right'>
        <Item>
          <Item.Content textAlign="right">
            <Item.Meta>Sub-total: ${subTotal().toFixed(2)}</Item.Meta>
            <Item.Meta>Digital Delivery Fee / Item: ${(deliveryFee() / totalQuantity()).toFixed(2)}</Item.Meta>
            <Item.Meta>Total Delivery Fee: ${deliveryFee().toFixed(2)}</Item.Meta>
            <Item.Header as='h3'>Total: ${Total().toFixed(2)}</Item.Header>
          </Item.Content>
        </Item>
      </Segment>
      <Segment basic textAlign='right'>
        <StripeButton />
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