<template>
  <div class="detail" id="notebook-list">
    <header>
      <!-- href="#" 链接返回到页面顶部-->
      <a href="#" class="btn"><i class="iconfont icon-plus"></i>新建笔记本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表（3）</h3>
        <div class="book-list">
          <a href="#" class="notebook">
            <div>
              <span class="iconfont icon-notebook"></span> 笔记本标题1  <span>3</span>
              <span class="action">编辑</span>
              <span class="action">删除</span>
              <span class="date">3天前</span>
            </div>
          </a>
          <a href="#" class="notebook">
            <div>
              <span class="iconfont icon-notebook"></span> 笔记本标题2  <span>3</span>
              <span class="action">编辑</span>
              <span class="action">删除</span>
              <span class="date">5天前</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Auth from '@/apis/auth'
// import Router from '@/router/index'
import Notebooks from '@/apis/notebooks'

//手动去浏览器页面测试接口
window.Notebooks = Notebooks

export default {
  data(){
    return {
      msg: '这是笔记本列表页面'
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
  }
}
</script>

<style lang="less" scoped>
//引入外部less文件
@import url(../assets/css/notebook-list);
</style>
