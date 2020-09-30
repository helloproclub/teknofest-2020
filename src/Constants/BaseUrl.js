import axios from 'axios'

axios.defaults.withCredentials = false;

export default axios.create({ baseURL: 'http://localhost:8000' })