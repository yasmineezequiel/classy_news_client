import React from 'react'
import { Container, Item } from 'semantic-ui-react'

export default ViewArticle = (props) => {
  return (
    <>
      <Container>
        <Item.Group> 
          <Item>
            <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
            <Item.Content>
              <Item.Description>{this.props.article.publish_date}</Item.Description>
              <Item.Header as='h2'>{this.props.article.title}</Item.Header>
              <Item.Meta name="article-content">{this.props.article.content}</Item.Meta>
              <Item.Extra>{this.props.article.author}</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group> 
      </Container>
    </>
  )
}
