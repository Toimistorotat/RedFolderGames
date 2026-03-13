import axios from 'axios'

//const baseUrl = 'http://localhost:8888/api/calculation'
const baseUrl = "https://phpbackend.samlam24.treok.io/api/calculation"

const makeHeader = () => {
    //let header =  {headers: {Authorization: `bearer ${token}`}}
    let header = { withCredentials: true }
    return header;
}

const getAllC = () => {
  const request = axios.get(baseUrl, makeHeader())
  return request.then(response => response.data)
}

const addC = (newCalculations) => {
  const request = axios.post(baseUrl, newCalculations, makeHeader())
  return request.then(response => response.data)
}

export default {
  getAllC,
  addC
}