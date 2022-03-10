/* eslint-disable import/prefer-default-export */
import $http from './axios'

// const vxLogin =
//   'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx53707b254b5feac1&redirect_uri=http%3A%2F%2Fwww.cdsj8.com%2F&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
// const vxLogin2 =
//   'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx53707b254b5feac1&redirect_uri=http%3A%2F%2Fwww.cdsj8.com%2F&response_type=code&scope=snsapi_base&state=123#wechat_redirect'

// 用户
export const userlogin = (data) => {
  return $http.post('/login', data)
}

export const Test = $http.get('/User/Test')

// 管理员
