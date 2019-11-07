import React from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './index.css';
import CreateArticle from './Components/CreateArticle'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import { Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar'
import { connect } from 'react-redux';
import PaymentForm from './Components/PaymentForm'
import ViewArticle from './Components/ViewArticle'
import { createBrowserHistory } from 'history'
import { generateRequireSignInWrapper } from 'redux-token-auth'

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/login'
})
const history = createBrowserHistory({})

const App = ({ currentUser }) => {
  return (
    <Router history ={history}>
      <>
        <NavBar />
        <Switch>
          <Route exact path='/signup' component={Signup}>
            {currentUser.isSignedIn ? <Redirect to='/' /> : <Signup />}
          </Route>
          <Route exact path='/login' component={Login}>
          {currentUser.isSignedIn ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route exact path='/subscribe' component={requireSignIn(PaymentForm)} />
          <Route exact path='/' component={ListArticles} />
          {currentUser.isSignedIn ? (
            <Route exact path='/' component={ListArticles} />
          ) : (
            <Redirect to='/login' />
          )} 
          {currentUser.attributes.role === 'subscriber' || 'journalist' ? (
            <Route exact path='/article/:id' component={ViewArticle} />
          ) : (
            <Redirect to='/subscribe' /> 
          )}
          {currentUser.attributes.role === 'journalist' ? (
            <Route exact path='/create-article' component={CreateArticle} />
          ) : (
            <Redirect to='/' />
          )}
        </Switch>
      </>
    </Router>
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
  )(App)