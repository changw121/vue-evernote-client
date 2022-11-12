//登陆验证，处理接口，在其他地方直接调用这个函数名即可

import request from '@/helpers/request'

//定义之后会用到的接口
const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  //获取用户信息
  GET_INFO: '/auth'
}

export default {
  //调用register函数只需要传递username和password，返回一个带有url和type的request对象
  register({username, password}) {
    return request(URL.REGISTER, 'POST', {username, password})
  },
  login({username, password}) {
    return request(URL.LOGIN, 'POST', {username, password})
  },
  logout() {
    return request(URL.LOGOUT)
  },
  getInfo(){
    return request(URL.GET_INFO)
  }
}
