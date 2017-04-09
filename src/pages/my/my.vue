<template>
  <div class="my" v-infinite-scroll="get_product" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
    <hot-product :hots="products"></hot-product>
    <loading v-show="my_loading"></loading>
    <nothing v-show="my_nothing"></nothing>
  </div>
</template>
<script>
  import HotProduct from '../home/HotProduct.vue'
  import loading from '../../components/loading.vue'
  import nothing from '../../components/nothing.vue'
  import { mapState , mapActions } from 'vuex'
  export default {
    name:'my',
    components:{
      HotProduct,
      loading,
      nothing
    },
    computed:{
      ...mapState(['products','my_loading','my_nothing','busy'])
    },
    methods:{
      ...mapActions(['get_product'])
    }
  }
</script>
<style lang="less" scoped>

</style>
