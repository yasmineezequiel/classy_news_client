import React, { Component, Suspense } from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './index.css';
import CreateArticle from './Components/CreateArticle'
import Internationalization from './Components/Internationalization';

class App extends Component {
  render() {
    return (
      <>
        <ListArticles />
        <CreateArticle />
        <Signup />
        <Login />
        <Suspense fallback={(<div>Loading</div>)}>
          <Internationalization />
        </Suspense>
      </>
    )
  }
}

export default App;