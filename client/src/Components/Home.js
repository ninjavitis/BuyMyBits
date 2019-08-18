import React, {useState} from 'react';
import Items from './Items'
import {Segment, Modal, Image, Header, List, Item, Icon} from 'semantic-ui-react'

const Home = () => {
  let [showWelcome, setShowWelcome] = useState(true)
  
  const WelcomeMessage = ()=> {
    
    const handleOpen = () => setShowWelcome(true)
    const handleClose = () => setShowWelcome(false)

    return (
      <Modal open={showWelcome} onClose={()=>handleClose()}>
        <Modal.Header>Welcome to Buy My Bits!</Modal.Header>
        <Modal.Content >
          <Modal.Description>
            <List>
              <List.Item>This is a React+Rails demo/portfolio site.  You can switch between internal and external API data in the nav bar (beware switching APIs while there are items in your cart!) </List.Item>
              <List.Item></List.Item>
              <List.Item>The external API uses data from Fortnite but Stripe is configured in TEST MODE: no purchases are actually made and no asset is delivered to the customer.</List.Item>
              <List.Item>Finally, this is a work in progress that is continually updated with new features and fixes.  If a feature you're expecitng to see is missing there's a good chance I'm planning on implementing it!</List.Item>
            </List>
            <Segment>
              <Item>
                <Item.Content>
                <Icon name='warning'/>
                  To complete the checkout process use cc# 4242 4242 4242 4242 with any future exp date and 3 digit verification number.
                  <br/>
                  </Item.Content>
                  <Item.Content>
                    DO NOT USE REAL CC INFO IN THE CHECKOUT FORM!
                  </Item.Content>
              </Item>
            </Segment>
            <List>
              <List.Item>
                <List.Icon name='github'/>
                <List.Content>
                  <List.Header as='a'>https://github.com/ninjavitis/BuyMyBits</List.Header>
                  <List.Description>Project Source</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='github'/>
                <List.Content>
                  <List.Header as='a'>https://github.com/ninjavitis</List.Header>
                  <List.Description>GitHub Profile</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
  

  return(
    <>
    <Segment style={{overflow: 'auto', maxHeight: '85vh' }}>
      <WelcomeMessage/>
      <Items/>
    </Segment>
    </>
  )
};

export default Home;