import axios from 'axios'
import getCurrentCredentials from './GetCredentials'

const apiUrl = 'http://localhost:3000/api/v1/'

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

const submitArticle = async (title, content, author, image) => {
  try {
    let response = await axios.post(
      apiUrl + 'articles',
      {
        title: title,
        content: content,
        author: author,
        image: image[0]
      }, 
      {
        headers: getCurrentCredentials()
      }
    )
    return response
  } catch (error) {
    return error.message
  }
}

export { getData, submitArticle }