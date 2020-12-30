import axios from 'axios'
// import store from '../store'
const service = axios.create({
    baseURL: 'http://localhost:3000/song/url?id=33894312&proxy=http://121.196.226.246:84',
    timeout: 10000 // 请求超时时间
})

// service.interceptors.request.use( config => {

//     },

// )
export default service