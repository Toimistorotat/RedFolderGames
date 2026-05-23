import axios from 'axios'

// const baseUrl = 'http://localhost:8888/api/commentstts'
const apiBase = import.meta.env.DEV ? "/api" : "https://phpbackend.samlam24.treok.io/api"
const baseUrl = `${apiBase}/commentstts`

const makeHeader = () => {
  return {
    withCredentials: false,
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

const getByGame = (gameId) => {
  const request = axios.get(`${baseUrl}?game_id=${gameId}`, makeHeader())
  return request.then(response => response.data)
}

const add = (newComment) => {
  const request = axios.post(baseUrl, newComment, makeHeader())
  return request.then(response => response.data)
}

export default {
  getAll,
  getBySection,
  getByGame,
  add
}
