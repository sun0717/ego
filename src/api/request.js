import axios from 'axios';
import base from './base';
const request = axios.create({
    baseURL: base.baseUrl,
    timeout: 5000
})
// 请求拦截
request.interceptors.request.use(config => {

    return config;
})

// 响应拦截
request.interceptors.response.use(res => {

    return res.data;
}, err => {
    return Promise.reject(err);
})

export default request;