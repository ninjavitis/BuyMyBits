import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import styled from 'styled-components';



ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));


