import React, { Component } from 'react'
import '../index.css';
import SignupForm from './SignupForm';
import { registerUser } from '../state/actions/reduxTokenAuthConfig';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Button, 
         Container,
         Grid  } from 'semantic-ui-react';

class Signup extends Component {
  state = {
    renderSignupForm: false,
    email: '',
    password: '',
    password_confirmation: '',
    nickname: '',
    name: '',
    city: '',
    country: 'Sweden',
    errorMessage: ''
  }

  renderSignup = () => {
    this.setState({
      renderSignupForm: !this.state.renderSignupForm
    })
  }

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup = () => {
    const { registerUser } = this.props;
    const { email, name, nickname, password, password_confirmation, city, country } = this.state;
    registerUser({ email, name, nickname, password, password_confirmation, city, country })
      .then(
        console.log('yiihaaaa')
      )
      .catch(error => {
        this.setState({errorMessage: error.response.data.errors}) 
      })
  }

  render() {
    const { t } = this.props;
    let signupForm
    let welcomeMessage
    let errorMessage

    if (this.props.currentUser.isSignedIn) {
      welcomeMessage = <p id="welcome-message">{t('signup.hello')} {this.props.currentUser.attributes.name}</p>
    } else {
      if (this.state.renderSignupForm) {
        signupForm = (
          <div>
            <SignupForm
              inputChangeHandler = {this.inputChangeHandler}
              handleSignup={this.handleSignup}
              renderSignup={this.renderSignup}
            />
          </div>
        )
      } else {
        signupForm = (
          <div>
            <Button id="signup-button" onClick={ this.renderSignup }>{t('signup.signup')}</Button>
          </div>
        )
      }
    }
    if (this.state.errorMessage !== '') {
      errorMessage = this.state.errorMessage
    }

    return (
      <Container>
        <Grid centered columns={1}>
          <Grid.Column>
            <div>
              { signupForm }
              { welcomeMessage }
            </div>
            <p id="error-message">{ errorMessage }</p>
          </Grid.Column>
        </Grid>   
      </Container>  
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

const mapDispatchToProps = {
  registerUser
}

export default withTranslation()
connect(
  mapStateToProps,  
  mapDispatchToProps
)(Signup);
