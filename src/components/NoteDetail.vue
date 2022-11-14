<template>
  <div id="note" class="etail">
    <note-sidebar></note-sidebar>
    <div class="note-detail">
      <!--    如果你的路由是/note/:noteId则再params里面找到后边的参数-->
      <!--    <h1>{{msg}} : {{$route.params.noteId}}</h1>-->
      <!--    如果你的路由是/note?notebookId则在query里面找到后边的参数-->
      <h1>notebookId: {{$route.query.notebookId}}</h1>
      <h1>noteId: {{$route.query.noteId}}</h1>
    </div>
  </div>
</template>

<script>
import Auth from '@/apis/auth'
import NoteSidebar from '@/components/NoteSidebar'
export default {
  components: {NoteSidebar},
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

<style lang="less" scoped>
  #note {
    display: flex;
    align-items: stretch;  //?
    background-color: #fff;
    flex: 1;  //占满剩下的空间
  }
</style>
