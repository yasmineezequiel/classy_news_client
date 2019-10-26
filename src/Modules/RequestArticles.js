import axios from 'axios'

const apiUrl = 'http://localhost:3000/api/v1'

const getData = async () => {
  try {
    let response = await axios.get(apiUrl + '/articles')
    return response.articles
  } catch (error) {
    return {
      error_message: error.message,
      status: 400
    }
  }
}

export { getData }