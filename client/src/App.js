import React from 'react';
import {Switch, Route, } from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import home from './Components/Home'
import Checkout from './Components/Checkout'
import styled from 'styled-components'
import Navbar from './Components/Navbar'
import FootBar from './Components/FootBar'
import Login from "./Components/Login";
import Register from "./Components/Register";
import NoMatch from "./Components/NoMatch";
import FetchUser from './Components/FetchUser';
import Profile from './Components/Profile'
import Orders from './Components/Orders'

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

    const Footer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
  `;

  return(
    <AppContainer style={{height:'100vh'}}>
      <Navbar />
      <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path="/login" component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/orders' component={Orders}/>
          <Route component={NoMatch} />
        </Switch>
      </Container>
      <Footer>
        <FootBar/>
      </Footer>
      </FetchUser>
    </AppContainer>
  )
}


export default App;
