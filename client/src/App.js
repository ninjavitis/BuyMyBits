import React from 'react';
import {Switch, Route, } from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import home from './Components/Home'
import Cart from './Components/Cart'
import styled from 'styled-components'
import Navbar from './Components/Navbar'
import Login from "./Components/Login";


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
    <AppContainer style={{height:'100vh'}}>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={home}/>
        <Route exact path="/login" component={Login} />
        <Route exact path='/cart' component={Cart}/>
      </Switch>
    </Container>
    </AppContainer>
  )
}


export default App;
