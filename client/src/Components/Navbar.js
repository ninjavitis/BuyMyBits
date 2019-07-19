import React from 'react';
import {Menu,Icon, Button} from 'semantic-ui-react'

const Navbar = () => {

const menuContent =(
  <>
  <Menu.Menu position='right'>
    <Menu.Item right>
      <Button icon><Icon name='cart'/>Cart</Button>
    </Menu.Item>
  </Menu.Menu>
  </>
)

  return(
  <Menu inverted>
    <Menu.Item inverted header><h1>Buy My Bits</h1></Menu.Item>
    {menuContent}
  </Menu>
  )
};

export default Navbar;