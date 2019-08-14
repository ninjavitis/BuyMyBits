import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../Providers/AuthProvider'
import {Segment, Form} from 'semantic-ui-react'

const Profile = () => {
  const {user} = useContext(AuthContext)
  const [first_name, setFirstName] = useState(user.first_name)
  const [last_name, setLastName] = useState(user.last_name)
  const [address_1, setAddress_1] = useState(user.address_1)
  const [address_2, setAddress_2] = useState(user.address_2)
  const [city, setCity] = useState(user.city)
  const [state, setState] = useState(user.state)
  const [zip, setZip] = useState(user.zip)
  const [email, setEmail] = useState(user.email)


  return (
    <Segment>
      <Form>
        <Form.Group>
          <Form.Input 
            label='First Name'
            name='first_name'
            value={first_name}
            placeholder='First Name'
            onChange={(e)=>setFirstName(e.target.value)}
            required
          />
          <Form.Input 
            label='Last Name'
            name='last_name'
            value={last_name}
            placeholder='Last Name'
            onChange={(e)=>setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Input 
            label='Address 1'
            name='address_1'
            value={address_1}
            placeholder='123 Sweet St.'
            onChange={(e)=>setAddress_1(e.target.value)}
            required
          />
        <Form.Input 
            label='Address 2'
            name='address_2'
            value={address_2}
            placeholder='Unit 2501'
            onChange={(e)=>setAddress_2(e.target.value)}
          />
          <Form.Group>
            <Form.Input 
              label='City'
              name='city'
              value={city}
              placeholder='Pleasantville'
              onChange={(e)=>setCity(e.target.value)}
              required
              />
            <Form.Input 
              label='State'
              name='state'
              value={state}
              placeholder='NC'
              onChange={(e)=>setState(e.target.value)}
              required
              />
            <Form.Input 
              label='Zip Code'
              name='zip'
              value={zip}
              placeholder='995599'
              onChange={(e)=>setZip(e.target.value)}
              required
              />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>    
      </Segment>
  );
}

export default Profile;