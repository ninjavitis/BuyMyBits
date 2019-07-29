import React from 'react';
import {Menu,Icon, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Navbar = () => {

const menuContent =(
  <>
  <Menu.Menu position='right'>
    <Link to='/cart'>
      <Menu.Item name='Checkout'>
        <Icon name='shopping cart'/>
        Checkout
      </Menu.Item>
    </Link>
  </Menu.Menu>
  </>
)

  return(
  <Menu inverted>
    <Link to='/'>
      <Menu.Item inverted header><h1>Buy My Bits</h1></Menu.Item>
    </Link>
    {menuContent}
  </Menu>
  )
};

export default Navbar;