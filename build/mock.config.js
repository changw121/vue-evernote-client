const fs = require('fs')
const path = require('path')

//本地测试地址
const mockBaseURL = 'https://note-server.hunger-valley.com'
//线上地址
const realBaseURL = 'https://note-server.hunger-valley.com'

//isDev表示是否为开发环境
exports.config = function({isDev = true} = {isDev: true}) {
  let fileTxt = `
  module.exports = {
    baseURL: '${isDev ? mockBaseURL : realBaseURL}'
  }
  `
  fs.writeFileSync(path.join(__dirname, '../src/helpers/config-baseURL.js'), fileTxt)
}
