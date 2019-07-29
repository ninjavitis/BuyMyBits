import React from 'react';
import {Menu,Icon,} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Navbar = () => {

const menuContent =(
  <>
  <Menu.Menu position='right'>
    <Link to='/cart'>
      <Menu.Item name='Checkout' >
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
      <Menu.Item header >Buy My Bits</Menu.Item>
    </Link>
    {menuContent}
  </Menu>
  )
};

export default Navbar;