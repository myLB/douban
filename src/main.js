import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import infiniteScroll from 'vue-infinite-scroll'
import VueLazyLoad from 'vue-lazyload'
import loading_image from './assets/images/loading.gif'
import 'font-awesome-webpack'
/*懒加载图片*/
Vue.use(ElementUI)
Vue.use(infiniteScroll)
Vue.use(VueLazyLoad, {
  loading:loading_image,
  error:'很遗憾，加载不出来',
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
  /*template: '<App/>',
  components: { App }*/
})
