import axios from 'axios'

//const baseUrl = 'http://localhost:8888/api/feedback'
const baseUrl = "https://phpbackend.samlam24.treok.io/api/feedback"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const add = (newFeedback) => {
  const request = axios.post(baseUrl, newFeedback, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return request.then(response => response.data)
}

export default {
  getAll,
  add
}