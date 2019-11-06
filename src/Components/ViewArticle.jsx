import React, { Component } from 'react'
import { Container, Item } from 'semantic-ui-react'
import { getArticle } from '../Modules/RequestArticles'

class ViewArticle extends Component {
  state = {
    article: null,
    error_message: ''
  }

  async componentDidMount() {
    let response = await getArticle(this.props.match.params.id)
    if (response.status === 200) {
      this.setState({
        article: response.data.article
      })
    } else {
      this.setState({
        error_message: response.data.error_message
      })
    }
  }

  render() {
    let singleArticle
    const article = this.state.article
  
    if (article) {
      singleArticle = (
        <div id="single-article">
          <Container>
            <Item.Group> 
              <Item>
                <Item.Image size='tiny' src={article.image} /> 
                <Item.Content>
                  <Item.Description id="article-date">{article.publish_date}</Item.Description>
                  <Item.Header as='h2' id="article-title">{article.title}</Item.Header>
                  <Item.Meta id="article-content">{article.content}</Item.Meta>
                  <Item.Extra id="article-author">{article.author}</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group> 
          </Container>
        </div>
      )
    } else {
      singleArticle = (
        <p>{this.state.error_message}</p>
      )
    }
    return (
      <>
        {singleArticle}
      </>
    )
  }
}

export default ViewArticle