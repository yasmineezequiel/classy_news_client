import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

 const NavBar = ({ currentUser }) => {
  return (
    <Menu>
      <Menu.Item 
        as={NavLink}
        to="/"
        name= "Home"
      />
      
      {currentUser.isSignedIn === false && (
        <Menu.Item 
          as={NavLink}
          to="/login"
          name= "Login"
        />
      )}

      {currentUser.isSignedIn === false && (
        <Menu.Item
          as={NavLink}
          to="/signup"
          name= "Sign Up"
        />
      )}

      {currentUser.attributes.role === 'journalist' && (
        <Menu.Item
          as={NavLink}
          to="/create-article"
          name= "Create Article"
        />
      )}

      {currentUser.attributes.role !== 'journalist' && (
        <Menu.Item
          as={NavLink}
          to="/subscribe"
          name= "Subscribe"
        />
      )}        
    </Menu>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps, 
  null
  )(NavBar)