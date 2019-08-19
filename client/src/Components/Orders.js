import React, {useState} from 'react';
import {Segment, Header, Icon, Button, Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Orders = () => {
  const [myOrders, setMyOrders] = useState('')

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