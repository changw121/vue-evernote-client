<template>
  <div id="note-detail">
<!--    如果你的路由是/note/:noteId则再params里面找到后边的参数-->
<!--    <h1>{{msg}} : {{$route.params.noteId}}</h1>-->
<!--    如果你的路由是/note?notebookId则在query里面找到后边的参数-->
    <h1>notebookId: {{$route.query.notebookId}}</h1>
    <h1>noteId: {{$route.query.noteId}}</h1>
  </div>
</template>

<script>
import Auth from '@/apis/auth'
export default {
  data(){
    return {
      msg: '笔记详情页'
    }
  },
  created() {
    Auth.getInfo()
      .then(res => {
        if(!res.isLogin) {
          this.$router.push({path: '/login'})
        }
      })
  }
}

</script>

<style scoped>
h1{
  color: blue;
}
</style>
