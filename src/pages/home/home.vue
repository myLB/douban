<template>
  <div class="home">

    <head-bar></head-bar>
    <!--头部-->

    <div :class="{'db-nav-bar':fixed}">
      <nav-bar></nav-bar>
    </div>
    <!--导航栏-->

    <transition name="made" mode="out-in">
      <router-view></router-view>
    </transition>
    <!--子路由变化-->
  </div>
</template>
<script>
  import HeadBar from '../../components/header.vue'
  import NavBar from '../../components/nav.vue'
  export default{
      name:'home',
      data(){
          return {
            fixed:false,
            bb:this.aa()
          }
      },
      components:{
        HeadBar,
        NavBar
      },
      methods:{
        handlerScroll(){
            const top=document.body.scrollTop;
            /*获取距离最顶部的距离*/
            const size=1.4*parseFloat(window.document.documentElement.style.fontSize);
            /*因为rem所以获取根节点的font-size*/
            if(top>size){
              this.fixed=true;
            }else {
                this.fixed=false;
            }
        },
        /*fixed导航*/
        aa(){
            return 'mmmm'
        }
      },
      mounted(){
        window.addEventListener('scroll',this.handlerScroll);
        /*添加事件*/
        console.log(this.$router);//VueRouter实例对象
        console.log(this.$route);//路径信息对象
        console.log(this.bb)
      },
      destroyed(){
        window.removeEventListener('scroll',this.handlerScroll);
        /*移除事件*/
      }
  }
</script>
<style lang="less" scoped>
  .made-enter-active,.made-leave-active{
    transition: all .2s ease
  }
  .made-enter,.made-leave-active{
    opacity: 0;
  }
  .db-nav-bar{
    position: fixed;
    width: 100%;
    left: 0;
    top:0;
    z-index: 9999;
  }
</style>
