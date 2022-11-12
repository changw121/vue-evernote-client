<template>
<span :title="username">{{slug}}</span>
</template>

<script>
import Auth from '@/apis/auth'
import Bus from '@/helpers/bus'

export default {
  data(){
    return {
      username: '未登录',
      //slug是用户名的第一个字，用户名更换了，是否需要修改这个slug呢
      //watch/计算属性就可以用来解决这个问题
      // slug: '未'
    }
  },

  //在created里面获取后端数据
  created() {
    //很早就在这里监听userInfo事件了
    Bus.$on('userInfo', user => {
      this.username = user.username
    })
    Auth.getInfo()
      .then(res => {
        console.log(res)  //先log一下数据看看是什么然后就知道怎么用了
        if(res.isLogin) {
          this.username = res.data.username
        }
      })
  },
  computed: {
    //这样第一个字就是计算出来的，而不是自己赋值的
    slug() {
      return this.username.charAt(0)
    }
  }
}
</script>

<style scoped>
span{
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
