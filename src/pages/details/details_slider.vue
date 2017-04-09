<template>
  <div class="details_slider">
    <swiper :options="detail_option">
      <swiper-slide v-for="(slide,index) in detail_sliders" :key="index" class="slide">
        <img :src="slide.img" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import { swiper , swiperSlide } from 'vue-awesome-swiper'
  import { mapState , mapActions } from 'vuex'
  export default {
      name:'details_slider',
      data(){
          return {
              /*detail_sliders:[
                {
                  img: "http://p1.bpimg.com/587986/7d53301336e9b995.jpg",
                },
                {
                  img: "http://p1.bpimg.com/587986/cefa54f9c5d03776.jpg",
                },
                {
                  img: "http://p1.bpimg.com/587986/5624606500e540ca.jpg",
                },
                {
                  img: "http://p1.bpimg.com/587986/5008ba25e806446c.jpg",
                },
                {
                  img: "http://p1.bpimg.com/587986/68ce77370073e517.jpg",
                },
                {
                  img: "http://p1.bpimg.com/587986/23fc150f3b39e7ea.jpg",
                },
                {
                  img: "http://p1.bpimg.com/587986/6a0de86396c71324.jpg",
                },
                {
                  img: "http://p1.bpimg.com/587986/08115d10186e5bb9.jpg",
                }
              ],*/
              detail_option:{
                initialSlide:1,//初始化时设置下标
                autoplay: 1000,//循环时间
                loop: true,//环路
                pagination : '.swiper-pagination',//分页器
                paginationClickable :true,//点击分页器是否切换
                setWrapperSize:true//用于对flex不怎么友好支持的版本
              }
          }
      },
      computed:{
        ...mapState(['detail_sliders'])
      },
      methods:{
        ...mapActions(['get_detail_sliders'])
      },
      mounted(){
          this.get_detail_sliders();
      },
      components:{
        swiper,
        swiperSlide
      }
  }
</script>
<style lang="less" scoped>
  .details_slider{
    width:100%;
    .swiper-pagination-bullet-active{
      opacity: 1;
      background-color: #3ba94d!important;
    }
    .slide{
      height:8rem;
      img{
        width:100%;
        height:100%;
      }
    }
    .swiper-pagination-bullets{
     bottom: 35px!important;
    }
  }
</style>
