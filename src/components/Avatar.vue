<template>
<span :title="user.username">{{slug}}</span>
</template>

<script>
export default {
  data(){
    return {
      user: {
        username: 'hunger'
      },
      slug: 'h'
    }
  }
}
</script>

<style scoped>
span{
  border: 1px solid red;
  display: inline-block;  /*用来设置行内元素的宽高*/
  width: 30px;
  height: 30px;
  text-align: center;  /*行内内容居中*/
  line-height: 32px;   /*多行文本的间距*/
  border-radius: 50%;  /*外边框圆角*/
  background: #f2b81c;
  color: #fff;
  text-shadow: 1px 0 1px #795c19;  /*为文字添加阴影*/
  font-weight: bold;
  text-transform: uppercase;  /*强制所有字符被转换为大写*/
  font-size: 18px;
  margin-top: 15px;
}
</style>
