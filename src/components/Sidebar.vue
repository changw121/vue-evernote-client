<template>
  <div id="sidebar">
    <avatar></avatar>
    <div class="icons">
      <router-link to="/note/1" title="笔记"><i class="iconfont icon-note"></i></router-link>
      <router-link to="/notebooks" title="笔记本"><i class="iconfont icon-notebook"></i></router-link>
      <router-link to="/trash/2" title="回收站"><i class="iconfont icon-trash"></i></router-link>
    </div>
    <div class="logout">
      <i class="iconfont icon-logout"></i>
    </div>
  </div>
</template>


<script>
import avatar from '@/components/Avatar'
export default {
  components: { avatar }
}
</script>

<!--引入less-->
<style lang="less" scoped>
#sidebar {
  //元素脱离正常的文档流，但是在文档流中的位置依然存在
  position: relative;
  width: 56px;
  text-align: center; /*行内元素居中*/
  background-color: #2c333c;

  .icons {
    margin-top: 15px;

    /*router-link标签会默认渲染为a标签*/
    a {
      padding: 6px 0; /*第一个值应用于上下，第二个值应用于左右*/
      display: block; /*设置为块级元素：总是在新行上开始*/
    }

    /* 当router-link被点击时候的样式 */
    .router-link-active {
      background-color: #5e6266;
    }
  }

  .logout {
    //元素是脱离正常文档流，同时在文档流中的位置不存在。
    //父元素是siderbar,用的是relative，所以logout相对于父元素sidebar定位
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    //设置光标的类型: 悬停在元素上，显示手型样式
    cursor: pointer;
  }

  .iconfont {
    color: #fff;
  }
}
</style>



