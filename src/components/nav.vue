<template>
  <div class="navbar">
    <nav>
      <router-link v-for="nav in nav_lists" :to="nav.path" class="nav-list" :key="nav.name" exact>{{nav.name}}</router-link>
    </nav>
    <div class="nav-border" :style="{transform:little}"></div>
  </div>
</template>
<script>
  export default {
      data(){
          return {
            nav_lists:[
              {path:'/',name:'首页',loading:'0%'},
              {path:'/classify',name:'分类',loading:'100%'},
              {path:'/cart',name:'购物车',loading:'200%'},
              {path:'/my',name:'我的',loading:'300%'}
            ],
            little:'translateX(0)'//translate的百分比位移是相对于自身的，就是说自己的宽度是多少位移的就是自己的宽度乘以百分比
          }
      },
      methods:{
          border(){
              console.log(1)
              var _this=this;
              var path=this.$route.path;
              var list=_this.nav_lists
              for(var i=0;i<list.length;i++){
                if(list[i].path==path){
                    _this.$set(_this.$data,'little','translateX('+list[i].loading+')')
                }
              }
          }
          /*点击时的nav横线位移*/
      },
      watch:{
          '$route':'border'//监听子路由变化
      },
      mounted(){
          this.border();//刷新页面时的nav横线位移
      }
  }
</script>
<style lang="less" scoped>
  .navbar{
    width:100%;
    position:relative;
    .nav-border{
      position: absolute;
      left:0;
      bottom:0;
      width:25%;
      height:2px;
      background-color:#3ba94d;
      transition:transform .3s ease;
    }
  }
  nav{
    width:100%;
    height:46px;
    text-align: center;
    display: flex;
    background-color:#fff;
    .nav-list{
      color: #4a4a4a;
      font-size: .5rem;
      flex: 1;
      line-height: 44px;
      border-bottom:2px solid #ccc;
    }
    .nav-list:hover{
      text-decoration: none;
    }
    .router-link-active{
      color: #3ba94d!important;
    }
  }
</style>
