<template>
  <div class="list_filtrate">
    <ul>
      <li v-for="(list,index) in lists" @click="count=index" :class="{'bc-red':count==index}">
        {{list}}
        <i class="el-icon-caret-bottom"></i>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
      name:'list_filtrate',
      data(){
          return {
              lists:['总和排序','上架时间','价格','喜欢数'],
              count:0
          }
      },
  }
</script>
<style lang="less" scoped>
  .list_filtrate{
    box-sizing: border-box;
    padding:0 .6rem;
    ul{
      li{
        display: inline-block;
        font-size: .36rem;
        text-align: center;
        width: 25%;
        line-height: 1.02rem;
        color: #ccc;
      }
    }
    .bc-red{
      color: #f67;
    }
  }
</style>
