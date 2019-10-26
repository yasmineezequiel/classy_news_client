import React, { Component } from 'react'
import { getData } from '../Modules/RequestArticles'

class ListArticles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  async getArticles() {
    let result = await getData()
    this.setState({
      articles: result.data.entries
    })
  }

  render() {
    const articleData = this.state.articles
    this.getArticles()

    if (articleData !== []) {
      articleData.forEach(art => {
        return (
          <div key={art.id}>
            {art.data.title}
            {art.data.content}
            {art.data.author}
          </div>
        )
      })
    }

    return(
      <div>
        No Articles Found
      </div>
    )
  }
}

export default ListArticles