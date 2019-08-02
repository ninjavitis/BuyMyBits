import React, {useState, useContext} from 'react';
import { AuthContext, } from "../Providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

const Login = (props) => {
  const {handleLogin} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    handleLogin({ email, password, }, props.history)
  }

  return (
    <Segment>
      <Header as='h1' textAlign='center'>
        Login
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input 
          label='email'
          name='email'
          value={email}
          placeholder='email'
          onChange={(e)=>setEmail(e.target.value)}
          required
          autoFocus
        />
        <Form.Input 
          label='password'
          name='password'
          value={password}
          placeholder='password'
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    </Segment>
  );
}

export default Login;