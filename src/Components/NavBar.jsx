import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

 const NavBar = ({ currentUser }) => {
  return (
    <nav>
      <ul>
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        {currentUser.isSignedIn === false && (
          <NavLink to='/login'>
            <li>Login</li>
          </NavLink>
        )}
        {currentUser.isSignedIn === false && (
          <NavLink to='/signup'>
            <li>Sign Up</li>
          </NavLink>
        )}
        {currentUser.attributes.role === 'journalist' && (
          <NavLink to='/create-article'>
            <li>Create Article</li>
          </NavLink>
        )}
      </ul>
    </nav>
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