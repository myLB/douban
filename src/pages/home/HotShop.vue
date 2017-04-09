<template>
  <div class="hot-shop" v-infinite-scroll="get_hot_shops" infinite-scroll-disabled="disabled" infinite-scroll-distance="20">
    <ul>
      <li v-for="shop in shops" class="db-hot-shop">
        <div class="db-hot-shop-top">
          <a href="">
            <img v-lazy="shop.icon" alt="" />
            {{shop.name}}
          </a>
          <p>{{shop.intrduction}}</p>
        </div>
        <hot-product :hots="shop.products"></hot-product>
        <div class="db-hot-shop-entrance">
          <a href="">进入店铺 >></a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import HotProduct from './HotProduct.vue'
  import { mapState , mapActions } from 'vuex'
  export default {
      name:'HotShop',
      data(){
          return {
              /*shops:[
                {
                  id:1,
                  icon:"http://p1.bqimg.com/587986/63494a85a50a37fe.jpg",
                  name:"海阔天空",
                  intrduction:"这是一个良心店铺，欢迎多多光临",
                  url:"http://www.dianpudizhi.com"
                },
                {
                  id:2,
                  icon:"http://p1.bqimg.com/587986/acc4b413ce765158.jpg",
                  name:"海阔天空",
                  intrduction:"这是一个良心店铺，欢迎多多光临",
                  url:"http://www.dianpudizhi.com"
                },
                {
                  id:3,
                  icon:"http://p1.bqimg.com/587986/43c04e26dc246a51.jpg",
                  name:"海阔天空",
                  intrduction:"这是一个良心店铺，欢迎多多光临",
                  url:"http://www.dianpudizhi.com"
                }
              ]*/
          }
      },
      methods:{
        ...mapActions(['get_hot_shops'])
      },
      computed:{
        ...mapState(['disabled','shops'])
      },
      components:{
        HotProduct
      }
  }
</script>
<style scoped lang="less">
  .hot-shop{
    a{text-decoration: none;color:#4a4a4a;}
    p{color:#9a9a9a;font-size:.4rem;}
  }
  .db-hot-shop{
    background-color: #fff;
    padding:5px;
    box-sizing: border-box;
    margin:.8rem 0;
    .db-hot-shop-top{
      padding:5px;
      margin-bottom:.4rem;
      a{
        display: block;
        margin-bottom:.1rem;
        img{width:.6rem;vertical-align: middle;}
      }
    }
    .db-hot-shop-entrance{
      font-size: .5rem;
      padding: 10px;
      text-align: right;
      display: block;
    }
  }
</style>
