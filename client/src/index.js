import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import { ShopProvider } from './Providers/ShopProvider';
import { AuthProvider } from "./Providers/AuthProvider";
import {Elements, StripeProvider} from 'react-stripe-elements';




ReactDOM.render(
  <AuthProvider>
    <ShopProvider>
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <Router>
          <App />
        </Router>
      </StripeProvider>
    </ShopProvider>
  </AuthProvider>
, document.getElementById('root')
);


