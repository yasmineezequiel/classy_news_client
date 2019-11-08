import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import myImage from '../logo.png'

 const NavBar = ({ currentUser }) => {
  return (
    <Menu className="navbar">
      <Menu.Item>
        <>
        <div to="/" />
        <div name= "Classy News" />
        <div id="navbar-title" />
        <a href={NavLink}><img src={myImage} width='60px' height='30px' display='block' /></a>
        </>
        </Menu.Item>

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