import React, { Component } from 'react';
import { Button } from "semantic-ui-react";
import SignupForm from './Components/SignupForm';

class App extends Component {
  state = {
    renderSignupForm: false
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
