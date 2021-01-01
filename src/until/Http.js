import axios from 'axios'
// import { Message } from 'element-ui';
// import store from '../store'
const App = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 10000

    })
    // service.interceptors.request.use(config => {
    //     //判断token  格式化数据
    //     return config
    // }, )
App.interceptors.response.use(config => {
    //判断状态码 返回数据
    console.dir(config)
    return config
})


export default App