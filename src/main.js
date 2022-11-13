// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element组件
import ElementUI from 'element-ui';
//引入样式
import 'element-ui/lib/theme-chalk/index.css';
//和vue结合起来
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //ES6语法相当于router:router
  components: { App },
  template: '<App/>'
})
