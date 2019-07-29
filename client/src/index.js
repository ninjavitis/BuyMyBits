import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import {ShopProvider} from './Providers/ShopProvider';



ReactDOM.render(
  <ShopProvider>
    <Router>
      <App />
    </Router>
  </ShopProvider>
, document.getElementById('root')
);


