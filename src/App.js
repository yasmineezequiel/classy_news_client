import React, { Component } from 'react';
import { Button } from "semantic-ui-react";
import SignupForm from './Components/SignupForm';

class App extends Component {
  state = {
    renderSignupForm: false
  }

  async onSignUp(e) {
    e.preventDefault();
    let resp = await authenticateSignUp(this.state.email, this.state.password, this.state.password_confirmation)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ smessage: resp.message, renderSignUpForm: false })
    }
  }
  
  render() {
    let signupForm
    
    if (this.state.renderSignupForm) {
      signupForm = (
        <div>
          <SignupForm />
        </div>
      )
    } else {
      signupForm = (
        <div>
          <Button id="signup-button" onClick={ () => this.setState({ renderSignupForm: true }) }>Sign Up</Button>
        </div>
      )
    }

    return (
      <div>
        { signupForm }
      </div>     
    )
  }
}
export default App;
