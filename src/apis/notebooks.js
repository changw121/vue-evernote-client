import request from '@/helpers/request'
//引入其中一个函数
import {friendlyDate} from '@/helpers/util'

const URL = {
  GET: '/notebooks',
  ADD: '/notebooks',
  UPDATE: '/notebooks/:id',
  DELETE: '/notebooks/:id',
}

export default {
  //获取所有的笔记
  getAll() {
    return new Promise((resolve, reject) => {
      request(URL.GET)
        .then(res => {
          // console.log("获取所有笔记...",res)
          //对笔记本列表按照创建日期排序
          res.data = res.data.sort((notebook1, notebook2) => notebook1.createdAt < notebook2.createdAt ? 1 : -1)
          res.data.forEach(notebook => {
              //给data里面的每一项增加一个字段friendlyCreatedAt
              notebook.friendlyCreatedAt = friendlyDate(notebook.createdAt)
            })
          resolve(res)
        }).catch(err => {
          reject(err)
      })
    })
  },

  //更新笔记本
  updateNotebook(notebookId, {title = ''} = {title: ''}){
    return request(URL.UPDATE.replace(':id', notebookId), 'PATCH', {title})
  },

  //删除笔记本
  deleteNotebook(notebookId) {
    return request(URL.DELETE.replace(':id', notebookId), 'DELETE')
  },

  //添加笔记本
  addNotebook({title = ''} = {title: ''}) {
    return request(URL.ADD, 'POST', {title})
  }

}
