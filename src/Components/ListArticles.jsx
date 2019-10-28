import React, { Component } from 'react'
import { getData } from '../Modules/RequestArticles'
import { Container, Header } from 'semantic-ui-react'

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
      renderListArticles = (
        <Container text>
          {articleData.data.map(art => {
            return <div key={art.id}>
                    <Header as='h2' id="article-title">{art.title}</Header>
                    <p className="article-content">{art.content}</p>
                    <p className="article-author">{art.author}</p>
                    <img src="https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
                    <hr />
                  </div>
          })}
        </Container>
      )
    } else {
        return(
          renderListArticles = (
          <div>
            {this.state.error_message}
          </div>
        )
      )
    }
    
    return(
      <>
      <Container text>
        <Header as='h1' id="header-title">Classy News</Header>
        {renderListArticles}
      </Container>
      </>
    )
  }
}

export default ListArticles