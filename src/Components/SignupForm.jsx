import React from 'react'
import { Form,
         Button 
} from "semantic-ui-react"
import { NavLink } from 'react-router-dom'

const SignupForm = (props) => {
  return (
    <div>
      <Form id='signup-form'>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Name' name='name' id="name-input" />
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Nickname' name='nickname' id="nickname-input" />
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='City' name='city' id="city-input" />
          </Form.Field>
          <Form.Field>
            <select className="select-css" onChange={props.inputChangeHandler} placeholder='Country' name='country' id="country-input">
              <option value='Sweden'>Sweden</option>
              <option value='Brazil'>Brazil</option>
              <option value='Germany'>Germany</option>
              <option value='Iceland'>Iceland</option>
              <option value='Portugal'>Portugal</option>
              <option value='Russia'>Russia</option>
              <option value='USA'>USA</option>
            </select>
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Email' name='email' id="email-input" />
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Password' name='password' id="password-input" />
          </Form.Field>
          <Form.Field>
            <input onChange={props.inputChangeHandler} placeholder='Password Confirmation' name='password_confirmation' id="password-confirmation" />
          </Form.Field>
          <NavLink to="/">
            <Button onClick={props.handleSignup} id="submit-signup-form" type='submit'>Submit</Button>
          </NavLink>
        </Form>
    </div>
  )
}

export default SignupForm