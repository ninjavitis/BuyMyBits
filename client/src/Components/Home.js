import React from 'react';
import Items from './Items'
import {Segment} from 'semantic-ui-react'


const Home = () => {

  return(
    <>
    <Segment style={{overflow: 'auto', maxHeight: '90vh' }}>
      <Items/>
    </Segment>
    </>
  )
};

export default Home;