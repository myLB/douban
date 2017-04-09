import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component:resolve => require(['../pages/home/home.vue'],resolve),
      children:[
        {
          path:'',
          component:resolve => require(['../pages/home/mall.vue'],resolve)
        },
        {
          path:'classify',
          name:'classify',
          component:resolve => require(['../pages/classify/classify.vue'],resolve)
        },
        {
          path:'cart',
          name:'cart',
          component:resolve => require(['../pages/cart/cart.vue'],resolve)
        },
        {
          path:'my',
          name:'my',
          component:resolve => require(['../pages/my/my.vue'],resolve)
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:resolve => require(['../pages/login/login.vue'],resolve)
    },
    {
      path:'/details/:id',
      name:'details',
      component:resolve => require(['../pages/details/details.vue'],resolve)
    },
    {
      path:'/list/:id',
      name:'list',
      component:resolve => require(['../pages/list/list.vue'],resolve)
    }
  ]
})
