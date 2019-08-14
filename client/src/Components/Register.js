import React, {useState, useContext} from 'react';
import { AuthContext } from "../Providers/AuthProvider";
import { Form, Segment, Header, Button, Icon} from 'semantic-ui-react';


const Register = (props) => {
  const {handleRegister} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConf, setPassConf] = useState('')

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [address_1, setAddress_1] = useState('')
  const [address_2, setAddress_2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')


  const handleSubmit = (e) => {
    if(password === passConf){
      handleRegister({email, password, first_name, last_name, address_1, address_2, city, state, zip})
    } else {
      alert('Passwords must match')
    }
    props.history.push('/')
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
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          required
          action={{ color: 'grey', labelPosition: 'left', icon: 'eye', content:'show'}}
          actionPosition='left'
        />
        <Form.Input 
          label='Confirm Password'
          name='passwordConfirmation'
          value={passConf}
          placeholder='Password'
          type="password"
          onChange={(e)=>setPassConf(e.target.value)}
          required
        />
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

export default Register;