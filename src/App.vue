<template>
  <div id="app">
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>
import sidebar from './components/Sidebar'
export default {
  name: 'App',
  components: {sidebar}
}
</script>

<style>
  @import "//at.alicdn.com/t/font_496303_kqrjhri8l25d0a4i.css";

  * {
    box-sizing: border-box;  /*你设置的宽度width=内容宽度+padding+border*/
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;  /*不让页面中所有的链接有下划线*/
    color: #444;
  }

  ul, li {
    list-style: none; /*删除列表中的原点*/
  }

  html, body, #app{
    height: 100%;
  }

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;  /*设置字体*/
    font-size: 14px;
    background-color: #eee;
  }


  /*.btn {*/
  /*  color: #666;*/
  /*  font-size: 12px;*/
  /*  padding: 2px 4px;*/
  /*  background-color: #fff;*/
  /*  border: none;*/
  /*  cursor: pointer;*/
  /*  display: inline-block;*/
  /*}*/

  #app {
    /*将其子元素拉伸至行高*/
    display: flex;
    align-items: stretch;
  }
</style>
