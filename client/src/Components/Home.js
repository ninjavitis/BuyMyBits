import React, {useState} from 'react';
import Items from './Items'
import {Segment, Modal, Image, Header} from 'semantic-ui-react'



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
            <p>This is a React+Rails demo/portfolio site.  You can switch between internal and external API data in the nav bar (beware switching APIs while there are items in your cart!) </p>
            <p>The external API uses data from Fortnite but because Stripe is configured in TEST mode no purchases are actually made and no asset is delivered to the customer.  This means we're not selling Epic IP!</p>
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