import request from '@/helpers/request'

const URL = {
  GET: '/notebooks',
  ADD: '/notebooks',
  UPDATE: '/notebooks/:id',
  DELETE: '/notebooks/:id',
}

export default {
  //获取所有的笔记
  getAll() {
    return request(URL.GET)
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
