 import React,{ Component } from 'react'
 import { submitArticle } from '../Modules/RequestArticles'

 class CreateArticle extends Component {
    state = {
      title:'',
      content:'',
      author:'',
      category:'',
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
      const { title, content, author, category } = this.state
      let response = await submitArticle(title, content, author, category)

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
          <div id="article-form">
            <input name="title" id="title-input" onBlur={this.inputHandler} />
            <input name="content" id="content-input" onBlur ={this.inputHandler}/>
            <input name="author" id="author-input" onBlur ={this.inputHandler}/>
            <input name="category" id="category-input" onBlur ={this.inputHandler}/>
            <button id="submit-article" onClick={this.submitArticleHandler.bind(this)}>Submit Article</button>
            </div>
        )
      }
      return(
        <>
        <button onClick={this.renderForm} id="create-article">write Article</button>
        {articleForm}
        {responseMessage}
        </>
      )
    }
 }

 export default CreateArticle
