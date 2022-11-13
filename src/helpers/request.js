import axios from 'axios'
import baseURLConfig from './config-baseURL'
import {Message} from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = baseURLConfig.baseURL
axios.defaults.withCredentials = true  //前端允许跨域

export default function request(url, type='GET', data={}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
      validateStatus(status) {
        return (status >= 200 && status < 300) || status === 400
      }
    }
    //在post和get请求中传递的参数不一样，在这里做了处理
    if(type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    axios(option).then(res => {
      if(res.status === 200){
        resolve(res.data)
      } else {
        // Message({
        //   type: 'error',
        //   message: res.data.msg
        // })
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({msg: '网络异常'})
    })
  })
}


