import axios from 'axios'

//const baseUrl = 'http://localhost:8888/api/feedback'
const baseUrl = "https://phpbackend.samlam24.treok.io/api/feedback"

const makeHeader = () => {
    //let header =  {headers: {Authorization: `bearer ${token}`}}
    let header = { withCredentials: true }
    return header;
}

const getAll = () => {
  const request = axios.get(baseUrl, makeHeader())
  return request.then(response => response.data)
}

const add = (newFeedback) => {
  const request = axios.post(baseUrl, newFeedback, makeHeader())
  return request.then(response => response.data)
}

export default {
  getAll,
  add
}