<template>
  <div class="db-list-nav">
    <ul>
      <li v-for="(list,index) in list_nav" @click="list_index=index" :class="{'bg-color':list_index==index}">{{list.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
      name:'db-list-nav',
      data(){
          return {
              list_nav:[
                {name:'全部'},
                {name:'男上装'},
                {name:'男下装'},
                {name:'裙装'},
                {name:'女套装'},
                {name:'女上装'},
                {name:'女下装'},
                {name:'职业装'},
                {name:'西装'},
                {name:'休闲装'},
                {name:'商务装'}
              ],
              list_index:0
          }
      }
  }
</script>
<style lang="less" scoped>
  .db-list-nav{
    height:1.02rem;
    line-height: 1.02rem;
    overflow: hidden;
    background-color: #3ba94d;
    ul{
      white-space: nowrap;
      height: 1.36rem;
      overflow-x: auto;
      li{
        font-size: .36rem;
        width: 1.6rem;
        text-align: center;
        display: inline-block;
      }
      .bg-color{
        color: #fff;
      }
    }
  }
</style>
