import axios from 'axios';
import {GET_LOCAL_ITEM} from "@/utils/utils.js";
// import $router from "../router/index"
// console.log( GET_LOCAL_ITEM('token'),666);
let baseURL = 'http://newshopapi.0melon0.cn/api';
// let baseURL = 'http://newshopapi.bluej.cn';
// 创建实例并配置基本项
let service = axios.create({
    baseURL, 
    timeout: 5000
})

//-----------------------------------------
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    //当存在 token 时,自动在请求头携带 token
    if (GET_LOCAL_ITEM('token') ) {
        config.headers['x-token'] =GET_LOCAL_ITEM('token') 
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
    //只返回 .data 数据
    // if (response.status == 200) {
    //     return response.data
    // } else {
    //     return response
    // }
    // 按需返回 
    return {
        data: response.data,
        status: response.status
    }
}, function (error) {
    // 对响应错误做点什么
    // switch(error.response.status){
    //     case 401:
    //         $router.push('./login')
    //         break;
    //         default:
    //         break;
    // }
    return Promise.reject(error);
});
export default service