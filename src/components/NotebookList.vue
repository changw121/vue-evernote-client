<template>
  <div class="detail" id="notebook-list">
    <header>
      <!-- href="#" 链接返回到页面顶部
        .prevent阻止默认事件传播：阻止a标签的跳转-->
      <a href="#" class="btn" @click.prevent="onCreate"><i class="iconfont icon-plus"></i>新建笔记本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表（{{ notebooks.length }}）</h3>
        <div class="book-list">
          <router-link v-for="notebook in notebooks" :key="notebook.id" to="/note/1" class="notebook">
            <div>
              <span class="iconfont icon-notebook"></span> {{ notebook.title }}
              <span>{{ notebook.noteCounts }}</span>
              <span class="action" @click.stop.prevent="onEdit(notebook)">编辑</span>
              <span class="action" @click.stop.prevent="onDelete(notebook)">删除</span>
              <span class="date">{{ notebook.friendlyCreatedAt }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Auth from '@/apis/auth'
// import Router from '@/router/index'
import Notebooks from '@/apis/notebooks'
import {friendlyDate} from '@/helpers/util'

//手动去浏览器页面测试接口，测试结束后注释掉
// window.Notebooks = Notebooks

export default {
  data(){
    return {
      //笔记本列表
      notebooks: [],
    }
  },
  created() {
    // console.log(this.$router === Router)  //true 说明直接使用this.$router和先引入Router再使用是一个效果
    Auth.getInfo()
      .then(res => {
        if(!res.isLogin) {
          this.$router.push({path: '/login'})
        }
      })
    Notebooks.getAll()
      .then(res => {
        // console.log(res)  //可以不用console.log用vue devtools找到对应的组件更方便
        this.notebooks = res.data
      })
  },
  methods: {
    onCreate() {
      this.$prompt('请输入新笔记本标题', '创建笔记本', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^.{1,30}$/,
        inputErrorMessage: '标题不能为空，且不超过30个字符'
      }).then(({ value }) => {
        //return一个新的promise对象，后边再对这个新的promise对象进行成功和失败的处理
        return Notebooks.addNotebook({title: value})
      }).then(res => {
        res.data.friendlyCreatedAt = friendlyDate(res.data.createdAt)
        this.notebooks.unshift(res.data)
        // 多行变下面一行
        // this.$message({
        //   type: 'success',
        //   message: res.msg
        // });
        this.$message.success(res.msg)
      })
      //   当前后端校验不一致的时候，后端的报错会通过这个catch捕获，所以这是一个后端的报错
      //   所以我们呢选择再request.js获取后端数据的时候就处理这个catch
      //   .catch((res) => {
      //   this.$message({
      //     type: 'error',
      //     message: res.msg
      //   })
      // })

      // console.log("onCreate...")   //测试
      //先用prompt写弹窗，之后再替换成ui组件
      // let title = window.prompt('创建笔记本')
      // if(title.trim() === '') {
      //   alert('笔记本名称不能为空')
      //   return
      // }
      // Notebooks.addNotebook({title})
      //   .then(res => {
      //     console.log(res)
      //     alert(res.msg)
      //     //添加的时候对时间进行处理
      //     res.data.friendlyCreatedAt = friendlyDate(res.data.createdAt)
      //     //将新添加的数据放在第一个位置
      //     this.notebooks.unshift(res.data)
      //   })
    },
    onEdit(notebook) {
      let title = ''
      this.$prompt('请修改笔记本标题', '修改笔记本', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^.{1,30}$/,
        inputValue: notebook.title,
        inputErrorMessage: '标题不能为空，且不超过30个字符'
      }).then(({ value }) => {
        title = value
        return Notebooks.updateNotebook(notebook.id, {title: value})
      }).then(res => {
        notebook.title = title
        this.$message.success(res.msg)
      })

      // // console.log("onEdit...", notebook)
      // let title = window.prompt('修改标题', notebook.title)  //第二个参数展示在弹窗里面
      // Notebooks.updateNotebook(notebook.id, {title})
      //   .then(res => {
      //     console.log(res)
      //     alert(res.msg)
      //     notebook.title = title
      //   })
    },
    onDelete(notebook) {
      this.$confirm('确认要删除笔记本吗?', '删除笔记本', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return Notebooks.deleteNotebook(notebook.id)
      }).then(res => {
        this.notebooks.splice(this.notebooks.indexOf(notebook), 1)
        this.$message.success(res.msg)
      })

      // // console.log("onDelete...", notebook)
      // let isConfirm = window.confirm('你确定要删除吗？')
      // if(isConfirm) {
      //
      //   Notebooks.deleteNotebook(notebook.id)
      //     .then(res => {
      //       console.log(res)
      //       //删除数组中某个元素
      //       this.notebooks.splice(this.notebooks.indexOf(notebook), 1)
      //       alert(res.msg)
      //     })
      // }
    }
  }
}
</script>

<style lang="less" scoped>
//引入外部less文件
@import url(../assets/css/notebook-list);
</style>
