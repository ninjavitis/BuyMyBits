import React,{ useContext} from 'react';
import {Menu,Icon, Dropdown,} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../Providers/AuthProvider'
import {ShopContext} from '../Providers/ShopProvider'

const Navbar = (props) => {

  const {authenticated, handleLogout, user} = useContext(AuthContext)
  const {cart, dataSource, getInternalData, getExternalData} = useContext(ShopContext)

  const dataOptions=[
    {
      key: 'internal',
      text: 'Internal API',
      value: 'internal',
    },
    {
      key: 'external',
      text: 'External API',
      value: 'external',
    },
  ]
  

  const menuContent =(
    <>
      <Menu.Menu position='right' >
        {authenticated ? 
              <Dropdown text={'Welcome, '+ user.first_name +'!'} pointing className='item' >
                <Dropdown.Menu>
                  <Dropdown.Item >My Bits (!)</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/profile'>Profile (!)</Dropdown.Item>
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
            <Icon name='shopping cart' color={cart.length === 0 && 'grey'}   />
            Cart
          </Menu.Item>
        </Link>
      </Menu.Menu>
    </>
  )

  const changeDataSource=(e,{value})=>{
    switch (value){
      case 'internal':
        getInternalData()
        break
      case 'external':
        getExternalData()
        break
      default:
        getExternalData()
    }
  }

  return(
    <>
      <Menu inverted>
        <Link to='/'>
          <Menu.Item header >Buy My Bits</Menu.Item>
        </Link>
          <Menu.Item header >Data Source ></Menu.Item>
          <Dropdown
          className='item'
          selection 
          placeholder='External API' 
          options={dataOptions}
          onChange={changeDataSource}/>
    
        {menuContent}
      </Menu>
    </>
  )
};

export default Navbar;