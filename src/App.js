import React, { Component } from 'react'
import ListArticles from './Components/ListArticles'
import './index.css';
import CreateArticle from './Components/CreateArticle'

class App extends Component {
  render() {
    return (
      <div>
        <CreateArticle />
        <ListArticles />
      </div>
    )
  }
}
export default App