import axios from 'axios'

const apiUrl = 'http://localhost:3000/api/v1'

const getData = async () => {
  let headers = await sessionStorage.getItem("credentials");
  headers = JSON.parse(headers)
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };
  const path = apiUrl + "/articles";
  return new Promise((resolve, reject) => {
    axios
      .get(path, {
        headers: headers
      })
      .then(response => {
        //storeAuthCredentials(response)
        resolve(response)
      })
  })
}

export { getData }