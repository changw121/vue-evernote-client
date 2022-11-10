<template>
  <div id="sidebar">
    <div class="icons">
      <router-link to="/note/1" title="笔记"><i class="iconfont icon-note"></i></router-link>
      <router-link to="/notebooks" title="笔记本"><i class="iconfont icon-notebook"></i></router-link>
      <router-link to="/trash/2" title="回收站"><i class="iconfont icon-trash"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#sidebar {
  /*position: relative;*/
  width: 56px;
  text-align: center;  /*行内元素居中*/
  background-color: #2c333c;
}

.icons {
  margin-top: 15px;
}
/*router-link标签会默认渲染为a标签*/
.icons a {
  padding: 6px 0;  /*第一个值应用于上下，第二个值应用于左右*/
  display: block;  /*设置为块级元素：总是在新行上开始*/
}

/* 当router-link被点击时候的样式 */
.icons .router-link-active {
  background-color: #5e6266;
}

/*.logout {*/
/*  position: absolute;*/
/*  bottom: 20px;*/
/*  width: 100%;*/
/*  text-align: center;*/
/*  cursor: pointer;*/
/*}*/

.iconfont {
  color: #fff;
}
</style>
