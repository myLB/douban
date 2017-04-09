<template>
  <div class="header">
    <header class="db-header">

      <div class="db-logo">豆瓣市集</div>
      <div class="db-search-icon" @click="onSearch">
        <i class="el-icon-search search"></i>
      </div>

      <transition name="find">
        <div class="db-search-box" v-show="show">
          <div class="db-search-top">
            <el-input icon="search" class="db-search-input"></el-input>
          </div>
          <div class="db-search-m" @click="show=!show"></div>
        </div>
      </transition>
      <!--全屏的搜索-->
    </header>
  </div>
</template>
<script>
  export default{
      name:'header',
      data(){
          return {
              show:false
          }
      },
      methods:{
        onSearch(){
            this.show=true
        }
      }
  }
</script>
<style lang="less" scoped>
  .db-header{
    height:1.4rem;
    line-height:1.4rem;
    background-color: #42b983;
    .db-logo{
      display: inline-block;
      font-size: 0.8rem;
      color: #fff;
      margin:0 .5rem;
    }
    .db-search-icon{
      float: right;
      font-size: .7rem;
      margin:0 .3rem;
      .search{
        display: inline-block;
        vertical-align: middle;
        color: #fff;
      }
    }
    .db-search-box{
      position: absolute;
      overflow: hidden;
      width:100%;
      height:100%;
      left:0;
      top:0;
      z-index:9;
      .db-search-top{
        text-align: center;
        background-color: #42b983;
        display:flex;
        align-items: center;
        justify-content: center;
        height:1.5rem;
        .db-search-input{
          font-size: .5rem;
          display: inline-block;
          width:80%;
          input{
            border-radius:.5rem;
          }
          .el-input__inner{
            outline: none!important;
            &:focus{
              box-shadow: none!important;
              outline: none!important;
             }
          }
        }
      }
      .db-search-m{
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,.4);
      }
    }
    .find-enter-active,.find-leave-active{
      transition: all .5s ease;
    }
    .find-enter,.find-leave-active{
      opacity: 0;
      transform:translateX(-100%);
    }
  }
</style>
