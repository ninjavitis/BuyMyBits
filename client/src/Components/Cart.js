import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";
import {Segment, Item, Button, Header, Icon} from 'semantic-ui-react'
import CartItem from './CartItem'
import {ShopContext} from '../Providers/ShopProvider'
import StripeCheckout from 'react-stripe-checkout';
import {AuthContext} from '../Providers/AuthProvider'



const Cart = () => {
  /////////////
  // STATE
  ////////
  const [paymentSuccess, setPaymentSuccess] = useState(null)

   /////////////
  // CONTEXT
  ////////
  const {user} = useContext(AuthContext)
  const {
    items, 
    cart, 
    totalQuantity, 
    deliveryFee, 
    subTotal, 
    Total, 
  } = useContext(ShopContext)

  /////////////
  // STRIPE
  ////////
  const StripeButton = ()=>{
    return(
        <StripeCheckout 
          amount={Total*100}
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

  const onToken = token =>{
      const body = {
        amount: Total()*100,
        token: token
      };  
    axios.post("http://localhost:8000/", body)
        .then(response => {
          console.log(response);
          setPaymentSuccess(true)
        })
        .catch(error => {
          console.log("Payment Error: ", error);
          alert("Payment Error");
        });
    };

   /////////////
  // COMPONENTS
  ////////
  const itemPane = (
    <>
      <Segment style={{overflow: 'auto', maxHeight: '40vh' }}>
        <Item.Group divided>
          {cart.map((cItem,i)=><CartItem key={cItem.item} item={cItem.item} cartIndex={i}/>)}
        </Item.Group>
      </Segment>
      <Segment textAlign="center">
        Delivery Fee per Item: ${(deliveryFee() / totalQuantity()).toFixed(2)}
        <br/>
        Add more bits to your cart to reduce the per item fee!
      </Segment>
      <Segment textAlign='right'>
        <Item>
          <Item.Content textalign="right">
            <Item.Meta>Sub-total: ${subTotal().toFixed(2)}</Item.Meta>
            <Item.Meta>Total Delivery Fee: ${deliveryFee().toFixed(2)}</Item.Meta>
            <Item.Meta>Total: ${Total().toFixed(2)}</Item.Meta>
          </Item.Content>
        </Item>
      </Segment>
      <Segment basic textAlign='right'>
        <StripeButton />
      </Segment>
    </>
  )
  
  const checkoutSuccess = (
        <Segment placeholder>
        <Header icon textAlign="center">
        <Icon name='box'/>
          Order Complete!  Check your bits under your user profile to see your new purchases!
        </Header>
        <Link to="/">
          <Button color='blue'>Check out your bits!</Button>
        </Link>
      </Segment>
  )

  const emptyCart = (
    <Segment placeholder>
      <Header icon textAlign="center">
      <Icon name='box'/>
        Your cart is empty, add some bits!
      </Header>
      <Link to="/">
        <Button size="massive" color='blue'>Take me to the bits!</Button>
      </Link>
    </Segment>
  )

  
  const PaneSwitcher = ()=>{
    switch(paymentSuccess){
      case false: return (cart.length > 0 ? itemPane:emptyCart)
      case true: return checkoutSuccess
      default: return (cart.length > 0 ? itemPane:emptyCart)
    }
  }
  

  return(
    <Segment style={{maxHeight: '90vh' }}>
      <PaneSwitcher/>
    </Segment>
  )
};

export default Cart;