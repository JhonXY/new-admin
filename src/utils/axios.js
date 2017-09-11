import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000
})

service.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

service.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
