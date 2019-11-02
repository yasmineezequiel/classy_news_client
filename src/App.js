import React, { Component } from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './index.css';
import CreateArticle from './Components/CreateArticle'
import PaymentForm from './Components/PaymentForm'

class App extends Component {
  render() {
    return (
      <div>
        <ListArticles />
        <CreateArticle />
        <Signup />
        <Login />
        <PaymentForm />
      </div>
    )
  }
}

export default App;