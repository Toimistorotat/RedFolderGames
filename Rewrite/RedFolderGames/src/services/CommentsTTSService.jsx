import axios from 'axios'

// const baseUrl = 'http://localhost:8888/api/commentstts'
const baseUrl = 'https://phpbackend.samlam24.treok.io/api/commentstts'

const makeHeader = () => {
  return {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

const getAll = () => {
  const request = axios.get(baseUrl, makeHeader())
  return request.then(response => response.data)
}

const getBySection = (sectionId) => {
  const request = axios.get(`${baseUrl}?section_id=${sectionId}`, makeHeader())
  return request.then(response => response.data)
}

const add = (newComment) => {
  const request = axios.post(baseUrl, newComment, makeHeader())
  return request.then(response => response.data)
}

export default {
  getAll,
  getBySection,
  add
}