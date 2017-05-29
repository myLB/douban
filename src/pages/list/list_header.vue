<template>
  <div class="list_header">
    <a href="/" class="bd-go-home">首页</a>
    <div class="db-list-title" @click="list_box=true">
      {{title}}
      <i class="el-icon-arrow-down"></i>
    </div>
    <transition name="list">
      <div class="db-list-header-nav" v-show="list_box">
        <ul>
          <li v-for="list in list_nav" :class="{'li-link':list.id==$route.params.id}" @click="list_box=false">
            <router-link :to="list.url">{{list.name}}</router-link>
          </li>
        </ul>
      </div>
    </transition>
    <div class="db-list-mark" v-show="list_box" @click="list_box=false"></div>
  </div>
</template>
<script>
  export default {
      name:'list_header',
      data(){
          return {
              title:'饮食',
              list_box:false,
              list_nav:[
                {name:'饮食',url:'/list/1',id:1},
                {name:'服装',url:'/list/2',id:2},
                {name:'配饰',url:'/list/3',id:3},
                {name:'包装',url:'/list/4',id:4},
                {name:'鞋靴',url:'/list/5',id:5},
                {name:'美容护肤',url:'/list/6',id:6},
                {name:'家具',url:'/list/7',id:7},
                {name:'时间',url:'/list/8',id:8},
                {name:'3c数码',url:'/list/9',id:9},
              ]
          }
      },
      methods:{
          change_title(){
            const id=this.$route.params;
            const list=this.list_nav;
            for (let elem of list) {
                if(id.id==elem.id){
                    this.title=elem.name;
                }
            }
          }
      },
      watch:{
          '$route':'change_title'
      }
  }
</script>
<style lang="less" scoped>
  .list_header{
    font-size:.44rem;
  .bd-go-home{
    text-decoration: none;
    color: #999;
    position: absolute;
    left: .4rem;
    line-height: 1.06rem;
  }
  .db-list-title{
    height:1.06rem;
    text-align: center;
    line-height: 1.06rem;
    color: #3ba94d;
  i{
    font-size: .32rem;
  }
  }
  .db-list-header-nav{
    position: fixed;
    transform: translate(1.8rem,4rem);
    width:6.4rem;
    border-radius:6px;
    padding: .4rem 0;
    background-color: #fff;
    overflow: hidden;
    z-index: 999;
    text-align: center;
  ul{
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    width:6.66rem;
    height:7rem;
  li{
    line-height: 1.02rem;
    height:1.02rem;
  a{
    text-decoration: none;
    color: #666;
    display: block;
  }
  }
  .li-link{
    background-color: #f0f0f0;
  }
  }
  }
  .list-enter-active{
    transition: transform .5s ease;
  }
  .list-leave-active{
    opacity: 1;
    transition: transform .5s ease;
  }
  .list-enter,.list-leave-active{
    transform:translate(1.8rem,-11rem);
  }
  .db-list-mark{
    width: 100%;
    height:100%;
    position: fixed;
    z-index: 99;
    left:0;
    top:0;
    background-color: rgba(0,0,0,.4);
  }
  }
</style>
