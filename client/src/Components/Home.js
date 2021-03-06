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
                  Stripe is currently disabled.
                  </Item.Content>
              </Item>
            </Segment>
            <Segment>
              The backend architecture is currently being refactored.  You can see the ER chart for the new design here: 
            <a href='https://www.lucidchart.com/invitations/accept/8693430e-3d56-4334-b06f-7bc0f334b1df'> https://www.lucidchart.com/invitations/accept/8693430e-3d56-4334-b06f-7bc0f334b1df</a>
            </Segment>
            <List>
              <List.Item>
                <List.Icon name='github'/>
                <List.Content>
                  <List.Header content={<a href='https://github.com/ninjavitis/BuyMyBits'>https://github.com/ninjavitis/BuyMyBits</a>} />
                  <List.Description>Project Source</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='github'/>
                <List.Content>
                  <List.Header content={<a href='https://github.com/ninjavitis'>https://github.com/ninjavitis</a>} />
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