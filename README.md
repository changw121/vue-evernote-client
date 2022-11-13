# evernote-client-teach

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
build之后，cd dist ，通过http-server

avatar组件展示从后端获取到的信息
组件之间的传递数据on emit


笔记本列表页面
![img.png](img.png)
点击新建笔记本
![img_1.png](img_1.png)
删除笔记本
![img_2.png](img_2.png)
编辑笔记本
![img_3.png](img_3.png)

先将html和css写出来
html写完后的页面
![img_4.png](img_4.png)

css太多可以写在assets里面

获取后端数据，先封装接口

周日下午
通过接口动态获取数据，展示在笔记本列表页面中，

点击编辑和删除的时候会发生页面跳转，这是因为在编辑和删除按钮的外面套了一层a链接，点击编辑和删除的同时会触发a链接。
对应的解决办法在vue——事件的处理里面。
下面这个链接详细解释了.stop和.prevent
https://blog.csdn.net/I_r_o_n_M_a_n/article/details/120251951
时间这个问题：
vue页面中的methods里面的数据希望在用之前就已经处理好了，在helpers里面的js是底层发送请求的，而在apis里面是根据具体业务需求写的js，所以我们选择在apis里面的js里面处理时间

