<template>
  <div class="classify">
    <ul class="db-classify">
      <li v-for="category in classifies">
        <router-link  :to="category.url" :style="category.bc">{{category.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:'classify',
    data(){
      return {
        classifies:[
          {name:'饮食',url:'/list/1',bc:{'background-color':'#ffb2bb'}},
          {name:'服装',url:'/list/2',bc:{'background-color':'#89b7ec'}},
          {name:'配饰',url:'/list/3',bc:{'background-color':'#c2a0e0'}},
          {name:'包装',url:'/list/4',bc:{'background-color':'#b2e6ff'}},
          {name:'鞋靴',url:'/list/5',bc:{'background-color':'#e6e7a4'}},
          {name:'美容护肤',url:'/list/6',bc:{'background-color':'#e0a0d1'}},
          {name:'家具',url:'/list/7',bc:{'background-color':'#b2ffc5'}},
          {name:'时间',url:'/list/8',bc:{'background-color':'#ffb2bb'}},
          {name:'3c数码',url:'/list/9',bc:{'background-color':'#ffb2bb'}},
        ]
      }
    },
  }
</script>
<style lang="less" scoped>
  .db-classify{
    width:100%;
    box-sizing: border-box;
    padding:10px .3rem;
    text-align:center;
    li{
      display: inline-block;
      width:30%;
      height:1.6rem;
      margin:0 5px 10px;
      a{
        display: block;
        font-size:.4rem;
        color:#4a4a4a;
        line-height:1.6rem;
        border-radius:5px;
        background-color: #3ba94d;
      }
      .blue{background-color: blue;}
    }
  }
</style>
