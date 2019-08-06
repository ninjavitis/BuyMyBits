import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import { ShopProvider } from './Providers/ShopProvider';
import { AuthProvider } from "./Providers/AuthProvider";




ReactDOM.render(
  <AuthProvider>
    <ShopProvider>
        <Router>
          <App />
        </Router>
    </ShopProvider>
  </AuthProvider>
, document.getElementById('root')
);


