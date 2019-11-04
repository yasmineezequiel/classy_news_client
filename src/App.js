import React from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './index.css';
import CreateArticle from './Components/CreateArticle'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import NavBar from './Components/NavBar'

const App = ({ user }) => {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ListArticles} />
          {user.role === "journalist" && (
            <Route exact path='/create-article' component={CreateArticle} />
          )}
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </>
    </Router>
  )
}

export default App