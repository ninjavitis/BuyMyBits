import React from 'react';
import {Switch, Route} from 'react-router-dom'
import home from './Components/Home'

const App = () => {
  return(
    <>
      <Switch>
        <Route exact path='/' component={home}/>
      </Switch>
    </>
  )
}


export default App;
