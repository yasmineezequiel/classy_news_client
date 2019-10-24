import React, { Component } from 'react';

class ArticleList extends Component {
  
  list() {
    return ArticleList(this.props.title, this.props.ingress, this.props.author, this.props.date)
  }
  
  render() {
    let articleList

    return (
      <div>
        
      </div>
    )
  }
}

export default ArticleList;