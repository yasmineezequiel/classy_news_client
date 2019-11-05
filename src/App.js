import React, { Component } from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './index.css';
import CreateArticle from './Components/CreateArticle'

console.log(process.env.REACT_APP_STRIPE_API_KEY)
class App extends Component {
  render() {
    return (
      <div>
        <ListArticles />
        <CreateArticle />
        <Signup />
        <Login />
      </div>
    )
  }
}

export default App;