import React,{useContext} from 'react';
import {Menu,Icon, Dropdown,} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../Providers/AuthProvider'
import {ShopContext} from '../Providers/ShopProvider'

const Navbar = (props) => {

  const {authenticated, handleLogout, user} = useContext(AuthContext)
  const {cart} = useContext(ShopContext)

  const menuContent =(
    <>
      <Menu.Menu position='right' >
        {authenticated ? 
              <Dropdown text={'Welcome, '+ user.first_name +'!'} pointing className='item' >
                <Dropdown.Menu>
                  <Dropdown.Item>Profile (!)</Dropdown.Item>
                  <Dropdown.Item>Orders (!)</Dropdown.Item>
                  <Dropdown.Item onClick={()=>handleLogout(props.history)}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          :
          <>
            <Link to='/register'>
              <Menu.Item name='Register'>
                <Icon name='user plus'/>
                Register
              </Menu.Item>
            </Link>
            <Link to='/login'>
              <Menu.Item name='Login'>
                <Icon name='user outline'/>
                Login
              </Menu.Item>
            </Link>
          </>
        }
        <Link to='/checkout'>
          <Menu.Item name='Checkout' >
            <Icon name='shopping cart' color={cart.length > 0? 'white' : 'grey' }   />
            Cart
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
      </Menu>
    </>
  )
};

export default Navbar;