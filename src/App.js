import React, { Component } from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import './index.css';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Signup />
        </div>
        <div>
          <ListArticles />
        </div>
      </>
    )
  }
}

export default App;