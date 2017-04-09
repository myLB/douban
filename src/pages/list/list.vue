<template>
  <div class="list">
    <list-header></list-header>
    <!--列表头部-->
    <list-nav></list-nav>
    <!--列表导航-->
    <list-filtrate></list-filtrate>
    <!--物品筛选-->
    <div class="product" v-infinite-scroll="get_list_product" infinite-scroll-disabled="list_busy" infinite-scroll-distance="20">
      <hot-product :hots="list_products">
        <i :slot="icon.id" class="db-bc-red" v-for="icon in icons" :key="icon.id" :class="{'el-icon-star-off':icon.class_name,'el-icon-star-on':!icon.class_name}" @click.prevent="icon.class_name=!icon.class_name"></i>
        <!--分发的内容，因为名字不能重复，所以用循环的办法来破解-->
      </hot-product>
    </div>
    <loading v-show="list_loading"></loading>
    <nothing v-show="list_nothing"></nothing>
  </div>
</template>
<script>
  import ListHeader from './list_header.vue'
  import ListNav from './list_nav.vue'
  import ListFiltrate from './list_filtrate.vue'
  import HotProduct from '../home/HotProduct.vue'
  import Nothing from '../../components/nothing.vue'
  import Loading from '../../components/loading.vue'
  import { mapState ,mapActions } from 'vuex'
  export default {
      name:'list',
      data(){
          return {
            /*icons:[
              {id:1,class_name:true},
              {id:2,class_name:true},
              {id:3,class_name:true},
              {id:4,class_name:true}
            ]*/
          }
      },
      methods:{
        ...mapActions(['get_list_product'])
      },
      computed:{
        ...mapState(['list_loading','list_nothing','list_products','list_busy','icons'])
      },
      components:{
        ListHeader,
        ListNav,
        ListFiltrate,
        HotProduct,
        Nothing,
        Loading
      }
  }
</script>
<style lang="less" scoped>
  .db-bc-red{
    color: #e17c72;
    font-size:.4rem;
    position: absolute;
    top:.2rem;
    right: .2rem;
  }
</style>
