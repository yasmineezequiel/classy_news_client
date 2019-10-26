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
    debugger

    if (result.status === 400) {
      this.setState({
        error_message: result.error_message
      })
    } else {
      this.setState({
        articles: result
      })
    }
  }

  render() {
    let renderListArticles;
    const articleData = this.state.articles

    if (this.state.error_message) {
      return(
        <div>
          { this.state.error_message }
        </div>
      )
    }

    if (articleData.length !== 0) {
      //debugger
      renderListArticles = (
        <div>
          {articleData.data.map(art => {
            return <div key={art.id}>
                    <h2>{art.title}</h2>
                    <p>{art.content}</p>
                    <p>{art.author}</p>
                    <hr />
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
        <h1>Classy News</h1>
        {renderListArticles}
      </>
    )
  }
}

export default ListArticles