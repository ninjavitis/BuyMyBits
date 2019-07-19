import React from 'react';
import {Switch, Route, } from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import home from './Components/Home'
import styled from 'styled-components'
import Navbar from './Components/Navbar'




const App = () => {
  const AppContainer = styled.div`
    background: repeating-linear-gradient(
      -45deg,
      #1a1a1a,
      #1a1a1a 6px,
      #222 6px,
      #222 12px
    );
  `;

  return(
    <AppContainer>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={home}/>
      </Switch>
    </Container>
    </AppContainer>
  )
}


export default App;
