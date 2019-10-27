import React from 'react'
import { Form,
  Button 
} from "semantic-ui-react";

const SignupForm = (props) => {
  return (
    <div>
      <Form id='signup-form'>
          <Form.Field>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Nickname' />
          </Form.Field>
          <Form.Field>
            <input placeholder='City' />
          </Form.Field>
          <Form.Field>
            <select placeholder='Country' />
              <option value='Brazil'>Brazil</option>
              <option value='Germany'>Germany</option>
              <option value='Iceland'>Iceland</option>
              <option value='Portugal'>Portugal</option>
              <option value='Russia'>Russia</option>
              <option value='Sweden'>Sweden</option>
              <option value='USA'>USA</option>
          </Form.Field>
          <Form.Field>
            <input placeholder='Password' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Password Confirmation' />
          </Form.Field>
          <Button id="submit-signup-form" type='submit' onClick={ (e) => props.signupHandler(e) }>Submit</Button>
        </Form>
    </div>
  )
}

export default SignupForm