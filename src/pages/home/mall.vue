<template>
  <div class="mall">
    <swiper :options="options" ref="self-motion">
      <swiper-slide v-for="slide in sliders" :key="slide.url" class="db-slide">
        <a :href="slide.url" target="_blank">
          <img :src="slide.img" alt="" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <hot-product :hots="hots"></hot-product>
    <hot-shop></hot-shop>
    <loading v-show="loading"></loading>
    <nothing v-show="nothing"></nothing>
  </div>
</template>
<script>
  import { swiper , swiperSlide } from 'vue-awesome-swiper'
  import HotProduct from './HotProduct.vue'
  import HotShop from './HotShop.vue'
  import { mapActions,mapState } from 'vuex'
  import loading from '../../components/loading.vue'
  import nothing from '../../components/nothing.vue'
  export default {
      name:'mall',
      data(){
        return {
          options:{
            initialSlide:1,//初始化时设置下标
            autoplay: 3000,//循环时间
            speed:5000,
            loop: true,//环路
            paginationHide:true,
            pagination : '.swiper-pagination',//分页器
            paginationClickable :true,//点击分页器是否切换
            setWrapperSize:true//用于对flex不怎么友好支持的版本
          },
          /*sliders:[
            {url:'baidu.com',id:'1',img:'https://img3.doubanio.com/img/files/file-1486953805-0.jpg'},
            {url:'baidu.com',id:'2',img:'https://img3.doubanio.com/img/files/file-1485236684-0.jpg'},
            {url:'baidu.com',id:'3',img:'https://img3.doubanio.com/img/files/file-1487144115-0.jpg'}
          ]*/
        }
      },
      methods:{
        ...mapActions(['get_sliders','get_hot_product'])
      },
      computed:{
        ...mapState(['sliders','hots','loading','nothing'])
        /*映射this.sliders()=this.$store.dispatch('sliders')*/
      },
      mounted(){
        this.get_sliders();
        this.get_hot_product();
        /*挂载完成后触发*/
      },
      components:{
        swiper,
        swiperSlide,
        HotProduct,
        HotShop,
        loading,
        nothing
      }
  }
</script>
<style lang="less" scoped>
  .mall{
    background-color:#f8f8fe;
    height: 100%;
  }
  .swiper-pagination-bullet-active{
    opacity: 1;
    background-color: #3ba94d!important;
  }
  .db-slide{
    width:100%;
    img{width:100%;}
  }
</style>
