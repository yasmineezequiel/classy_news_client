import React, { Component } from 'react'
import { getData } from '../Modules/RequestArticles'

class ListArticles extends Component {
  state = {
    articles: [],
    error_message: null
  }

  componentDidMount() {
    this.getArticles()
  }

  async getArticles() {
    let result = await getData()
    this.setState({
      articles: result
    })
  }

  render() {
    let renderListArticles;
    const articleData = this.state.articles

    if (articleData !== []) {
      renderListArticles = (
        <div>
          {articleData.map(art => {
            return <div key={art.id}>
                    <p>{art.title}</p>
                    <p>{art.content}</p>
                    <p>{art.author}</p>
                  </div>
          })}
        </div>
      )
    } else {
        return(
          renderListArticles = (
          <div>
            No Articles Found
          </div>
        )
      )
    }
    return(
      <>
        {renderListArticles}
      </>
    )
  }
}

export default ListArticles