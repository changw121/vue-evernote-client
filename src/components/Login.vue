<template>
<div id="login">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="main"></div>
        <div class="form">
          <h3 @click="showRegister">创建账户</h3>
          <transition name="slide">
            <div v-show="isShowRegister" class="register">
              <input type="text" v-model="register.username" placeholder="用户名">
              <input type="password" v-model="register.password" placeholder="密码">
              <p :class="{error: register.isError}">{{register.notice}}</p>
              <div class="button" @click="onRegister">创建账号</div>
            </div>
          </transition>
          <h3 @click="showLogin">登录</h3>
          <transition name="slide">
            <div v-show="isShowLogin" class="login">
              <input type="text" v-model="login.username" placeholder="输入用户名">
              <input type="password" v-model="login.password" placeholder="密码">
              <p :class="{error: login.isError}">{{login.notice}}</p>
              <div class="button" @click="onLogin">登录</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isShowRegister: true,
      isShowLogin: false,
      register: {
        username: '',
        password: '',
        isError: false,
        notice: '请输入用户名和密码'
      },
      login: {
        username: '',
        password: '',
        isError: false,
        notice: '创建账号后，请记住用户名和密码'
      }
    }
  },
  methods: {
    showRegister() {
      this.isShowRegister = true
      this.isShowLogin = false
    },
    showLogin() {
      this.isShowRegister = false
      this.isShowLogin = true
    },
    onRegister() {
      if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)){
        this.register.isError = true
        this.register.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
        return
      }
      if(!/^.{6,16}$/.test(this.register.password)){
        this.register.isError = true
        this.register.notice = '密码长度为6~16个字符'
        return
      }
      this.register.isError = false
      this.register.notice = ''
      console.log(`start register..., username: ${this.register.username} , password: ${this.register.password}`)
    },
    onLogin() {
      if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)){
        this.login.isError = true
        this.login.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
        return
      }
      if(!/^.{6,16}$/.test(this.login.password)){
        this.login.isError = true
        this.login.notice = '密码长度为6~16个字符'
        return
      }
      this.login.isError = false
      this.login.notice = ''
      console.log(`start login..., username: ${this.login.username} , password: ${this.login.password}`)
    }
  }
}
</script>

<style lang="less" scoped>
.modal-mask {
  position: fixed;  /*元素被固定在页面上*/
  z-index: 100;  /*当元素之间重叠的时候，z-index较大的元素会覆盖较小的元素在上层进行显示*/
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  display: table;
  transition: opacity .3s ease;  /*过渡：属性 持续时间 函数 延迟时间*/
}
.modal-wrapper {
  //元素的垂直居中对齐
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 800px;
  height: 500px;
  margin: 0px auto;  //上下为0左右为auto;让浏览器自己选择一个合适的外边距。有时，在一些特殊情况下，该值可以使元素居中
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;

  .main {
    //当希望元素充分利用剩余空间，同时不会侵占其他元素应有的宽度的时候，适合使用flex:1
    flex: 1;
    //no-repeat 图像不会被重复
    background: #36bc64 url(//cloud.hunger-valley.com/17-12-13/38476998.jpg-middle) center center no-repeat;
    background-size: contain;  //设置背景图片大小,该背景图会填充所在的容器
  }
  .form {
    width: 270px;
    border-left: 1px solid #ccc;

    h3 {
      padding: 10px 20px;
      font-weight: normal;  //原本是h3的加粗状态，现在不加粗
      font-size: 16px;
      border-top: 1px solid #eee;
      cursor: pointer;

      // 对第2个h3标题操作
      &:nth-of-type(2){
        border-bottom: 1px solid #eee;
      }
    }

    .button {
      background-color: #2bb964;
      height: 36px;
      line-height: 36px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      margin-top: 18px;
      cursor: pointer;
    }

    .login, .register {
      padding: 10px 20px;
      border-top: 1px solid #eee;

      input {
        // 该元素生成一个块级元素盒，在正常的流中，该元素之前和之后产生换行
        display: block;
        width: 100%;
        height: 35px;
        line-height: 35px;
        padding: 0 6px;
        border-radius: 4px;
        border: 1px solid #ccc;
        //input的outline默认值由浏览器决定,若不设置则鼠标点击input时会有黑色边框出现
        outline: none;
        font-size: 14px;
        margin-top: 10px;
      }
      //将鼠标选中时input的黑色边框换成下面的蓝色
      input:focus {
        border: 3px solid #9dcaf8;
      }

      p {
        font-size: 12px;
        margin-top: 10px;
        color: #444;
      }

      .error {
        color: red;
      }
    }
    .login {
      border-top: 0;
    }
  }
}
</style>


