import axios from 'axios'
// axios.create创建一个axios实例
const $http = axios.create({
  baseURL: 'http://webapi.cdsj8.com'
  // timeout: 1000,
})

// 添加请求拦截器
$http.interceptors.request.use(
  // eslint-disable-next-line func-names
  function (config) {
    // 在发送请求之前做些什么
    // config.headers.token="token"
    // eslint-disable-next-line no-param-reassign
    // config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  },
  // eslint-disable-next-line func-names
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
$http.interceptors.response.use(
  // eslint-disable-next-line func-names
  function (response) {
    // 对响应数据做点什么
    const { data } = response
    return data
  },
  // eslint-disable-next-line func-names
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default $http
