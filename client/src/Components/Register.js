import React, {useState, useContext} from 'react';
import { AuthContext } from "../Providers/AuthProvider";
import { Form, Segment, Header, } from 'semantic-ui-react';


const Register = (props) => {
  const {handleRegister} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConf, setPassConf] = useState('')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address_1, setAddress_1] = useState('')
  const [address_2, setAddress_2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')


  const handleSubmit = (e) => {
    if(password === passConf){
      handleRegister({email, password, passConf, firstName, lastName, address_1, address_2, city, state, zip})
    } else {
      // TODO handle password mismatch
    }
  }

  return (
    <Segment>
      <Header as='h1' textAlign='center'>Register</Header>
      <Form onSubmit={handleSubmit}>
      <Form.Input 
          label='Email'
          name='email'
          value={email}
          placeholder='email'
          onChange={(e)=>setEmail(e.target.value)}
          required
          autoFocus
        />
        <Form.Input 
          label='Password'
          name='password'
          value={password}
          placeholder='password'
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <Form.Input 
          label='Confirm Password'
          name='passwordConfirmation'
          value={passConf}
          placeholder='Password'
          onChange={(e)=>setPassConf(e.target.value)}
          required
        />
        <Form.Group>
          <Form.Input 
            label='First Name'
            name='first_name'
            value={firstName}
            placeholder='First Name'
            onChange={(e)=>setFirstName(e.target.value)}
          />
          <Form.Input 
            label='Last Name'
            name='last_name'
            value={lastName}
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
              onChange={(e)=>city(e.target.value)}
              />
            <Form.Input 
              label='State'
              name='state'
              value={state}
              placeholder='NC'
              onChange={(e)=>state(e.target.value)}
              />
            <Form.Input 
              label='Zip Code'
              name='zip'
              value={zip}
              placeholder='995599'
              onChange={(e)=>zip(e.target.value)}
              />
          </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </Segment>
  );
}

export default Register;