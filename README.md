# douban
这是一个仿别人的项目，主要用了vue2 + vue-router2 + vuex + axios + el-ui,之前没写过移动端的，就仿了一下，算是一个完整的demo，
除了数据是原作者的，其他都是自己编写的，vue之前用过但是其他的没怎么用过，就像仿个项目试试，包括一些vue的插件，总体来说还是挺好的。


### 项目地址: (`git clone`)

```shell
git clone https://github.com/myLB/douban.git
```

### 安装

```
npm install
```

### 运行

```
npm run dev
```

### 技术栈

* vue2
* vue-router2
* vuex
* vue-cli
* es6/es7
* axios
* vue-infinite-scroll
* vue-lazyload

### 项目结构

<pre>
.
├── README.md
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── test               // 没用到
├── src
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── mock           // 模拟数据
│   ├── pages          // 各页面
│   ├── router         // 存放路由的文件夹
│   ├── store	          // 状态管理store
│     ├── App.Vue        // 模板文件入口
│   └── main.js        // Webpack 预编译入口
│

</pre>
