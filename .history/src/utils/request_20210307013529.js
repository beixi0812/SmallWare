import axios from 'axios';

// 创建实例并配置基本项
let service = axios.create({
    baseURL: 'http://192.168.31.97:3030',
    timeout: 5000
})

function getToken() {
    return localStorage.getItem('token') || false
}

//-----------------------------------------
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    //当存在 token 时,自动在请求头携带 token
    if (getToken()) {
        config.headers['token'] = getToken() 
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//-----------------------------------------
// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    //只返回 data 数据
    let data = response.data
    return data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default service