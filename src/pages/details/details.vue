<template>
  <div class="details">
    <div class="db-detail-return" @click="$router.go(-1)">
      <i class="el-icon-arrow-left"></i>
    </div>
    <!--返回上一页-->

    <div class="db-detail-top">
      <detail-slider></detail-slider>
    </div>
    <!--轮播-->

    <div class="db-detail-section">
      <detail-section></detail-section>
    </div>
    <!--购买内容-->

    <div class="db-user-list">
      <ul>
        <li v-for="list in user_list" @click="trans_component(list)">{{list.nav}}</li>
      </ul>
      <div class="db-user-border" :style="{transform:plan}"></div>
    </div>
    <!--详情、讨论、评价-->

    <div class="db-detail-user">
      <keep-alive>
        <transition name="user" mode="out-in">
          <component :is="view"></component>
        </transition>
      </keep-alive>
    </div>
    <!--具体的组件变化-->

    <div class="db-shop-buy">
      <ul>
        <li class="bc-pink">前往购物车</li>
        <li class="bc-fen">加入购物车</li>
        <li class="bc-red">立即购买</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import DetailSlider from './details_slider.vue'
  import DetailSection from './detail-scction.vue'
  import ProductDetail from './product-detail.vue'
  import DetailEvaluate from './detail-evaluate.vue'
  import DetailDiscuss from './detail-discuss.vue'
  export default {
    name:'details',
    data(){
        return {
            user_list:[
              {nav:'商品详情',loading:'0%',view:'ProductDetail'},
              {nav:'评价',loading:'100%',view:'DetailEvaluate'},
              {nav:'讨论',loading:'200%',view:'DetailDiscuss'},
            ],
            plan:'translateX(0)',//border位移变化
            view:'ProductDetail'//动态组件替换
        }
    },
    methods:{
        trans_component(list){
          this.plan='translateX('+list.loading+')';
          this.view=list.view;
          console.log(this.view)
        }
        /*点击改变组件和border位移*/
    },
    components:{
      DetailSlider,
      DetailSection,
      ProductDetail,
      DetailEvaluate,
      DetailDiscuss
    }
  }
</script>
<style lang="less" scoped>
  .details{
    .db-detail-return{
      position: fixed;
      top:.3rem;
      left:.3rem;
      z-index: 999;
      width:.8rem;
      height:.8rem;
      line-height: .8rem;
      border-radius: 100%;
      text-align: center;
      background-color: rgba(0,0,0,.2);
      color: cyan;
    }
    .db-user-list{
      margin-top:1rem;
      position: relative;
      font-size: .42rem;
      width:100%;
      height:1.2rem;
      line-height: 1.2rem;
      color: #4a4a4a;
      text-align: center;
      border-bottom: 1px solid #ccc;
      padding:0 0.5%;
      ul{
        display: flex;
        li{
          flex: 1;
        }
      }
      .db-user-border{
        position: absolute;
        left: 0;
        bottom: 0;
        width:33.3%;
        border-bottom:2px solid #e17c72;
        transition: transform .2s ease;
      }
    }
    .db-detail-user{
      .user-enter-active,.user-leace-active{
        transition: all .2s ease;
      }
      .user-enter,.user-leace-active{
        opacity: 0;
      }
    }
    .db-shop-buy{
      position: fixed;
      left: 0;
      bottom: 0;
      width:100%;
      height: 1.2rem;
      ul{
        text-align: center;
        font-size: .36rem;
        display: flex;
        li{
          flex: 1;
          background-color: #fff;
          line-height: 1.2rem;
          color:#fff;
        }
        .bc-pink{
          background-color: burlywood;
        }
        .bc-fen{
          background-color: #eba887;
        }
        .bc-red{
          background-color: #e17c72;
        }
      }
    }
  }
</style>
