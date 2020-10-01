import axios from 'axios'

<<<<<<< HEAD
export default axios.create({ baseURL: process.env.REACT_APP_API_URL })
=======
axios.defaults.withCredentials = false;

export default axios.create({ baseURL: 'http://localhost:8000' })
>>>>>>> 204a71ae300540b6f343dd2962e1fc6f9bc2baee
