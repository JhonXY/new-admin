import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000
})

// request拦截器
service.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default service 
