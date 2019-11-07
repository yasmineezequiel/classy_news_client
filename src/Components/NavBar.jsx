import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

 const NavBar = ({ currentUser }) => {
  return (
    <Menu className="navbar">
      <Menu.Item 
        as={NavLink}
        to="/"
        name= "Classy News"
        id="navbar-title"
      />

      {currentUser.attributes.role === 'journalist' && (
        <Menu.Item
          as={NavLink}
          to="/create-article"
          name= "Create Article"
        />
      )}

      <Menu.Menu position="right">
        {currentUser.attributes.role !== 'journalist' && (
          <Menu.Item
            as={NavLink}
            to="/subscribe"
            name= "Subscribe"
          />
        )}  

        {currentUser.isSignedIn === false && (
          <Menu.Item
            as={NavLink}
            to="/signup"
            name= "Sign Up"
          />
        )}

        {currentUser.isSignedIn === false && (
          <Menu.Item 
            as={NavLink}
            to="/login"
            name= "Login"
            id=""
          />
        )}
      </Menu.Menu>      
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