import React, {useState, useContext} from 'react';
import { AuthContext, } from "../Providers/AuthProvider";
import { Form, Segment, Header, Label } from 'semantic-ui-react';

const Login = (props) => {
  const {handleLogin, loginSuccessful} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    handleLogin({ email, password, }, props.history)
  }

  const InvalidLogin =(
    <Segment basic>
      Invalid Login.  Please re-enter your email and password.
    </Segment>
  )

  return (
    <Segment>
      {loginSuccessful? null: InvalidLogin}
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
          type='password'
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    </Segment>
  );
}

export default Login;