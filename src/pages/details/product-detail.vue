<template>
  <div class="product-detail">
    <ul>
      <li v-for="photo in photos"><img :src="photo.img" alt=""></li>
    </ul>
    <div class="db-product-bottom">
      <a href="" class="border">购物说明</a><a href="">帮助</a>
      <a href="" class="db-relation">联系豆瓣</a>
    </div>
    <div class="db-fair">
      逛逛<a href="/">豆瓣市集</a>
    </div>
  </div>
</template>
<script>
  export default {
      name:'product-detail',
      data(){
      return {
        photos:[
          {img:'http://p1.bpimg.com/587986/649b4ff9a029dbb3.jpg'},
          {img:'http://p1.bpimg.com/587986/c5d8d2c850c5cc92.jpg'},
          {img:'http://p1.bpimg.com/587986/12e168a53d8b1390.jpg'},
          {img:'http://p1.bpimg.com/587986/4aa678607eb830c0.jpg'},
          {img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg'},
          {img:'http://p1.bpimg.com/587986/8cf8a0478c1bb5f7.jpg'},
          {img:'http://p1.bpimg.com/587986/7d53301336e9b995.jpg'},
          {img:'http://p1.bpimg.com/587986/cefa54f9c5d03776.jpg'},
          {img:'http://p1.bpimg.com/587986/5624606500e540ca.jpg'},
          {img:'http://p1.bpimg.com/587986/5008ba25e806446c.jpg'},
          {img:'http://p1.bpimg.com/587986/68ce77370073e517.jpg'},
          {img:'http://p1.bpimg.com/587986/23fc150f3b39e7ea.jpg'},
          {img:'http://p1.bpimg.com/587986/6a0de86396c71324.jpg'},
          {img:'http://p1.bpimg.com/587986/08115d10186e5bb9.jpg'}
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  .product-detail{
    img{
      width:100%;
    }
    .db-product-bottom{
      box-sizing: border-box;
      padding:.2rem .4rem;
      position: relative;
      a{
        text-decoration: none;
        font-size:.36rem;
        color: #9a9a9a;
        padding: 0 .1rem;
      }
      .border{
        border-right:1px solid #9a9a9a;
      }
      .db-relation{
        float: right;
        &:after{
          content: '';
          clear: both;
         }
      }
      &:after{
        content:'';
        position: absolute;
        left:-50%;
        bottom: 0;
        width:200%;
        height:1px;
        background-color:#ccc;
        transform:scale(.5) ;
       }
    }
    .db-fair{
      text-align: center;
      box-sizing: border-box;
      line-height: 2rem;
      font-size: .4rem;
      margin-bottom:2.6rem;
      a{
        text-decoration: none;
        color: #3ba94d;
      }
    }
  }
</style>
