import React, { Component } from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './index.css';
import CreateArticle from './Components/CreateArticle'
import { Switch, Route } from 'react-router-dom'
import ViewArticle from './Components/ViewArticle'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={ListArticles} />
          <Route exact path='/view-article' component={ViewArticle} />
        </Switch>
        <Login />
        <Signup />
        <CreateArticle />
      </>
    )
  }
}

export default App;