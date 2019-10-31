 import React,{ Component } from 'react'
 import { submitArticle } from '../Modules/RequestArticles'
 import { Form, Button, Container } from 'semantic-ui-react'

 class CreateArticle extends Component {
    state = {
      title:'',
      content:'',
      author:'',
      category:'',
      publish_date: '',
      renderArticleForm: false
    }

    renderForm = () => {
      this.setState({
        renderArticleForm: !this.state.renderArticleForm
      })
    }

    inputHandler = (e) => {
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    submitArticleHandler = async() => {
      const { title, content, author, category, publish_date } = this.state
      let response = await submitArticle(title, content, author, category, publish_date)

      if(response.status === 200) {
        this.setState({
          responseMessage: response.data.message
        })
      }else{
        this.setState({
          responseMessage: response
        })
      }
    }
    render() {
      let articleForm
      let responseMessage

      if (this.state.responseMessage) {
      responseMessage = <p id="response-message">{this.state.responseMessage}</p>
      }

      if(this.state.renderArticleForm) {
        articleForm = (
          <>
            <Container>
              <Form id="article-form">
                <Form.Field>
                  <input name="title" id="title-input" placeholder="Title" onBlur={this.inputHandler} />
                </Form.Field>
                <Form.Field>
                  <input name="content" id="content-input" placeholder="Content" onBlur ={this.inputHandler}/>
                </Form.Field>
                <Form.Field>
                  <input name="author" id="author-input" placeholder="Author" onBlur ={this.inputHandler}/>
                </Form.Field>
                <Form.Field>
                  <input name="category" id="category-input" placeholder="Category" onBlur ={this.inputHandler}/>
                </Form.Field>
                <Form.Field>
                  <Button id="submit-article" onClick={this.submitArticleHandler.bind(this)}>Submit Article</Button>
                  <Button id="cancel-article" onClick={this.renderForm}>Cancel</Button>
                </Form.Field>
              </Form>
            </Container>
          </>
        )
      } else {
        articleForm = (
          <Button onClick={this.renderForm} id="create-article">write Article</Button>
        )
      }
      return(
        <>
        {articleForm}
        {responseMessage}
        </>
      )
    }
 }

 export default CreateArticle
