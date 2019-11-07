import React, { Component } from 'react'
import '../index.css';
import { signOutUser } from '../state/actions/reduxTokenAuthConfig';
import { connect } from 'react-redux';
import { Button, 
         Container,
         Grid  } from 'semantic-ui-react';

class Logout extends Component {
  state = {
    errorMessage: ''
  }

  signOut = (e) => {
    debugger
    e.preventDefault()
    const { signOutUser } = this.props

    signOutUser()
      .then(
        console.log('yiihaaaa')
      )
      .catch(error => {
        debugger
        this.setState({errorMessage: error.response.data.errors.full_messages[0]}) 
      })
  }

  render() {
    let logoutButton, errorMessage
    const {signOut} = this
    if (this.props.currentUser.isSignedIn) {
        logoutButton = (
          <div>
            <Button id='logout-button' onClick={signOut}>Logout</Button>
          </div>
        )
      }
    if (this.state.errorMessage !== '') {
      errorMessage = this.state.errorMessage
    }

    return (
      <Container>
        <Grid centered columns={1}>
          <Grid.Column>
            <div>
              { logoutButton }
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
    state: state,
    currentUser: state.reduxTokenAuth.currentUser
  }
}

const mapDispatchToProps = {
  signOutUser
}

export default connect(
  mapStateToProps,  
  mapDispatchToProps
)(Logout);