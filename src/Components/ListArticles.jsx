import React, { Component } from 'react'
import { getData } from '../Modules/RequestArticles'
import { Container, Header, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class ListArticles extends Component {
  state = {
    articles: [],
    error_message: null,
    renderArticleId: null
  }

  componentDidMount() {
    this.getArticles()
  }

  makeIngress = (content, wordcount) => {
    let ingress = content.split(' ').slice(0, wordcount).join(' ')
    return ingress + ' ...'
  }

  async getArticles() {
    let result = await getData()

    if (result.error_message) {
      this.setState({
        error_message: result.error_message
      })
    } else {
      this.setState({
        articles: result
      })
    }
  }

  render() {
    let renderListArticles, error_message
    const articleData = this.state.articles

    if (this.state.error_message) {
      error_message = <p>{ this.state.error_message }</p>
    }

    if (articleData.length !== 0) {
      renderListArticles = (
        <>
          {articleData.map(article => {
            return <NavLink id={`article_${article.id}`} key={article.id} to={`/article/${article.id}`}>
              <Item.Group> 
                <Item>
                  <Item.Image id='article-image' size='tiny' src={article.image} />
                  <Item.Content>
                    <Item.Description id='article-publish'>{article.publish_date}</Item.Description>
                    <Item.Header as="h1" id='article-title'>{article.title}</Item.Header>
                    <Item.Meta id='article-content' name="article-content">{this.makeIngress(article.content, 15)}</Item.Meta>
                    <Item.Extra id='article-author'>{article.author}</Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group> 
            </NavLink>
          })}
        </>
      )
    }
    return(
      <>
        <Container text>
          <Item.Group>
            <Header as='h1' id="header-title">BREAKING NEWS</Header>
            {renderListArticles}
            {error_message}
          </Item.Group>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps, 
  null
  )(ListArticles)