import React from 'react'
import { Form,
  Button 
} from "semantic-ui-react";

const SignupForm = (props) => {
  return (
    <div>
      <Form id='signup-form'>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Name' name='name' />
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Nickname' name='nickname' />
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='City' name='city' />
          </Form.Field>
          <Form.Field>
            <select onChange={props.inputChangeHandler} placeholder='Country' name='country' />
              <option value='Brazil'>Brazil</option>
              <option value='Germany'>Germany</option>
              <option value='Iceland'>Iceland</option>
              <option value='Portugal'>Portugal</option>
              <option value='Russia'>Russia</option>
              <option value='Sweden'>Sweden</option>
              <option value='USA'>USA</option>
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Password' name='password' />
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Password Confirmation' name='password_confirmation' />
          </Form.Field>
          <Button onClick={props.handleSignup} id="submit-signup-form" type='submit' onClick={ (e) => props.signupHandler(e) }>Submit</Button>
        </Form>
    </div>
  )
}

export default SignupForm