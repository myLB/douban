<template>
  <div class="hot">
    <ul class="db-hot-product-list">
      <li v-for="hot in hots">
        <div class="db-hot-product-intro">
          <dl>
            <dt>
              <a :href="'/details/'+hot.id">
                <img v-lazy="hot.src" alt="">
                <slot :name="hot.id"></slot>
              </a>
            </dt>
            <dd>
              <h3>
                <a :href="'/details/'+hot.id" class="db-hot-detail">{{hot.title}}</a>
              </h3>
              <p class="db-hot-price">
                <span class="db-old-price">{{hot.newPrice}}</span>
                <del class="db-new-price">{{hot.oldPrice}}</del>
              </p>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
      name:'hot',
      props:['hots'],
      data(){
          return {
              /*hots:[
                {
                  id:1,
                  img:'http://p1.bqimg.com/587986/d610f2017722917d.jpg',
                  title:'PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女',
                  newPrice: "￥229",
                  oldPrice: "￥299"
                },
                {
                  id:2,
                  img:'http://p1.bqimg.com/587986/e78acb66093e82a3.jpg',
                  title:'PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女',
                  newPrice: "￥229",
                  oldPrice: "￥299"
                },
                {
                  id:3,
                  img:'http://p1.bqimg.com/587986/854f603f1b671024.jpg',
                  title:'PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女',
                  newPrice: "￥229",
                  oldPrice: "￥299"
                },
                {
                  id:4,
                  img:'http://p1.bqimg.com/587986/52ea1976165e74c6.jpg',
                  title:'PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女',
                  newPrice: "￥229",
                  oldPrice: "￥299"
                }
              ]*/
          }
      }
  }
</script>
<style scoped lang="less">
  .db-hot-product-list:after{
    display: block;
    content: '';
    clear: both;
    height: 0;
  }
  .db-hot-product-list{
    width:100%;
    margin-top:.2rem;
    li{
      width:50%;
      box-sizing: border-box;
      padding:0 5px;
      margin-bottom:.28rem;
      float:left;
      .db-hot-product-intro{
        box-sizing: border-box;
        box-shadow: 0 0 2px #ccc;
        border-radius: 2px;
      }
      a{
        text-decoration: none;
        color:#ccc;
      }
      dt{
        a{
          font-size: 0;
          display: block;
          position: relative;
          height: 5rem;
        }
        img{
           width:100%;
           height:100%;
        }
      }
      dd{
        background-color:#fff;
        padding:5px;
        .db-hot-detail{
          width:100%;
          display: block;
          text-overflow:ellipsis;
          white-space:nowrap;
          overflow:hidden;
          box-sizing: border-box;
          padding:5px 0;
          font-size:.36rem;
        }
        .db-hot-price{
          font-size:.36rem;
        .db-old-price{
          color: #e17c72;
          font-weight:600;
        }
        .db-new-price{
          color: #ccc;
        }
        }
      }
    }
  }
</style>
