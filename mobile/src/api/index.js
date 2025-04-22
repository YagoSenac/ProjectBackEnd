import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.19.14.123:8000/api/',
    timeout:10000,
})

export default api