import axios from 'axios'

const apiUrl = 'http://localhost:3000/v1/'

const getData = async () => {
  try {
    let response = await axios.get(apiUrl + 'articles')
    return response
  } catch (error) {
    return {
      error_message: error.message,
      status: 400
    }
  }
}

const submitArticle = async (title, content, author, category) => {
  try {
    let response = await axios.post(
      apiUrl + 'articles',
      {
        title: title,
        content: content,
        author: author,
        category: category
      }
    )
    return response
  } catch (error) {
    return error.message
  }
}

export { getData, submitArticle }