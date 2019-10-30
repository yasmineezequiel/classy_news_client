 import React,{ Component } from 'react'

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
      this.setStste({
        [e.target.name]:e.target.value
      })
    }
    submitArticleHandler = async() => {
      const { title,content } =this.state
      let response = submitArticle(title,content)

      if(response.status === 200) {
      }else{

      }
    }
    render() {
      let articleForm

      if(this.state.renderArticleForm) {
        articleForm = (
          <div id="article.form">
            <input name="titie" id="title-input" onBlur={this.inputHandler} />
            <input name="content" id="content-input" onBlur ={this.inputHandler}/>
            <button id="submit-article" onClick={this.submitArticleHandler.bind(this)}>submi</button>
            </div>
      
        )
      }
      return(
        <>
        <button onClick={this.renderForm} id="write-article">write Article</button>
        {articleForm}
        </>
      )
    }
 }

 export default CreateArticle
