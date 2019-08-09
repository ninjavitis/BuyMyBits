import React, {useState, useContext} from 'react';
import { AuthContext } from "../Providers/AuthProvider";
import { Form, Segment, Header, } from 'semantic-ui-react';


const Register = (props) => {
  const {handleRegister} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConf, setPassConf] = useState('')

  const handleSubmit = (e) => {
    if(password === passConf){
      handleRegister({email, password, passConf})
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
        <Form.Button>Submit</Form.Button>
      </Form>
    </Segment>
  );
}

export default Register;