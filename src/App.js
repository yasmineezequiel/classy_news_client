import React, { Component } from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './index.css';
import CreateArticle from './Components/CreateArticle'
import PaymentForm from './Components/PaymentForm'
import Logout from './Components/Logout'

class App extends Component {
  render() {
    return (
      <>
        <Login />
        <Signup />
        <Logout />
        <CreateArticle />
        <PaymentForm />
        <ListArticles />
      </>
    )
  }
}

export default App;