import React, {useState, useEffect, useContext} from 'react';
import {Segment, Header, Icon, Button, Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../Providers/AuthProvider'


const Orders = () => {
  const [myOrders, setMyOrders] = useState('')
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    axios.get(`/api/orders/#(user.id)`)
    .then(res=> console.log(res.data))
    .catch(res=> console.error(res))
  },[])

  const noOrders = (
    <Segment placeholder>
      <Header icon textAlign="center">
      <Icon name='box'/>
        You have no completed orders, place one!
      </Header>
      <Link to="/">
        <Button size="massive" color='blue'>Take me to the bits!</Button>
      </Link>
    </Segment>
  )

  const orderDisplay = (
    <Table>

    </Table>
  )

  return (
    <>
    <Segment style={{maxHeight: '90vh' }}>
      {myOrders.length > 0 ? orderDisplay: noOrders}
    </Segment>
    </>
  );
}

export default Orders;