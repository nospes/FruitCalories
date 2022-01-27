import axios from 'axios'

const dadosApi = axios.create({
  baseURL: 'http://pocs.digitalpages.com.br/mock/api/fruits-api'
})

export default dadosApi
