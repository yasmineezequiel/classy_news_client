import React, { Component } from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import './index.css';
import CreateArticle from './Components/CreateArticle'
import { Switch, Route } from 'react-router-dom'
import ViewArticle from './Components/ViewArticle'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/list-articles' component={ListArticles} />
          <Route exact path='/create-article' component={CreateArticle} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </>
    )
  }
}

export default App;