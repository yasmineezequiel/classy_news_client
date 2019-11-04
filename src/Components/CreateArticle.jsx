 import React, { Component } from 'react'
 import { submitArticle } from '../Modules/RequestArticles'
 import { Form, Button, Container } from 'semantic-ui-react'
 import { useTranslation } from 'react-i18next'

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

      if (response.status === 200) {
        this.setState({
          responseMessage: response.data.message
        })
      } else {
        this.setState({
          responseMessage: response
        })
      }
    }

    render() {
      let articleForm
      let responseMessage
      const { t } = useTranslation()

      if (this.state.responseMessage) {
      responseMessage = <p id="response-message">{this.state.responseMessage}</p>
      }

      if (this.state.renderArticleForm) {
        articleForm = (
          <>
            <Container>
              <Form id="article-form">
                <Form.Field>
                  <input name="title" id="title-input" placeholder={t('createarticle.title')} onBlur={this.inputHandler} />
                </Form.Field>
                <Form.Field>
                  <input name="content" id="content-input" placeholder={t('createarticle.content')} onBlur ={this.inputHandler}/>
                </Form.Field>
                <Form.Field>
                  <input name="author" id="author-input" placeholder={t('createarticle.author')} onBlur ={this.inputHandler}/>
                </Form.Field>
                <Form.Field>
                  <input name="category" id="category-input" placeholder={t('createarticle.category')} onBlur ={this.inputHandler}/>
                </Form.Field>
                <Form.Field>
                  <Button id="submit-article" onClick={this.submitArticleHandler.bind(this)}>{t('createarticle.submit')}</Button>
                  <Button id="cancel-article" onClick={this.renderForm}>{t('createarticle.cancel')}</Button>
                </Form.Field>
              </Form>
            </Container>
          </>
        )
      } else {
        articleForm = (
          <Button onClick={this.renderForm} id="create-article">{t('createarticle.write')}</Button>
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
