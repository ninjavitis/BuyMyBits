import React from 'react';
import {Switch, Route, } from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import home from './Components/Home'
import Checkout from './Components/Checkout'
import styled from 'styled-components'
import Navbar from './Components/Navbar'
import Login from "./Components/Login";
import Register from "./Components/Register";
import NoMatch from "./Components/NoMatch";


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
        <Route exact path='/register' component={Register} />
        <Route exact path='/checkout' component={Checkout}/>
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </AppContainer>
  )
}


export default App;
