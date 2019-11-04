import React from 'react'
import { Form,
         Button 
} from "semantic-ui-react"
import { NavLink } from 'react-router-dom'

const LoginForm = (props) => {
  return (
    <div>
      <Form id='login-form'>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Email' name='email' id="email-input" />
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Password' name='password' id="password-input" />
          </Form.Field>
          <NavLink to="/login">
            <Button onClick={props.handleLogin} id="submit-login-form" type='submit'>Submit</Button>
          </NavLink>       
        </Form>
    </div>
  )
}

export default LoginForm