import React,{useContext} from 'react';
import {Menu,Icon,} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../Providers/AuthProvider'

const Navbar = () => {

  const {authenticated} = useContext(AuthContext)

const menuContent =(
  <>
    <Menu.Menu position='right'>
      {authenticated ? 
        <Link to='/logout'>
          <Menu.Item>
            <Icon name='user'/>
          </Menu.Item>
        </Link>
        :
        <Link to='/login'>
          <Menu.Item name='Login'>
            <Icon name='user outline'/>
          </Menu.Item>
        </Link>
      }
      <Link to='/cart'>
        <Menu.Item name='Checkout' >
          <Icon name='shopping cart'/>
          
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