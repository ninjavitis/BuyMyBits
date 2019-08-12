import React,{useContext} from 'react';
import {Menu,Icon,} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../Providers/AuthProvider'

const Navbar = (props) => {

  const {authenticated, handleLogout} = useContext(AuthContext)

const menuContent =(
  <>
    <Menu.Menu position='right'>
      {authenticated ? 
          <Menu.Item onClick={()=>handleLogout(props.history)}>
            <Icon name='user times'/>
            Sign Out
          </Menu.Item>
        :
        <>
          <Link to='/register'>
            <Menu.Item name='Register'>
              <Icon name='user plus'/>
            </Menu.Item>
          </Link>
          <Link to='/login'>
            <Menu.Item name='Login'>
              <Icon name='user outline'/>
            </Menu.Item>
          </Link>
        </>
      }
      <Link to='/checkout'>
        <Menu.Item name='Checkout' >
          <Icon name='shopping cart'/>
          
        </Menu.Item>
      </Link>
    </Menu.Menu>
  </>
)

  return(
    <>
      <Menu inverted>
        <Link to='/'>
          <Menu.Item header >Buy My Bits</Menu.Item>
        </Link>
        {menuContent}
        <Menu.Menu>
          <Menu.Item header>WORK IN PROGRESS - FOR DEMONSTRATION ONLY</Menu.Item>
        </Menu.Menu>
        </Menu>
    </>
  )
};

export default Navbar;