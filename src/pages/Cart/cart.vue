<template>
  <div class="cart">
    <div class="db-login">
      <p>还未登录，请使用豆瓣账号登录</p>
    </div>
    <div class="db-login-box">
      <p class="db-login-top">登录豆瓣后，可以进行订单查询，使用优惠券</p>
      <a href="/login" class="db-login-a">
        <el-button type="success" class="db-login-button">登录</el-button>
      </a>
      <p class="db-login-bottom">
        没有豆瓣账号?<a href="/login" class="db-login-href">注册</a>
      </p>
    </div>
    <div class="db-indent">
      <p>使用匿名购买，则可以点击以下链接查询订单</p>
      <a href="/login" class="db-login-href">查询订单</a>
    </div>
  </div>
</template>
<script>
  export default {
    name:'cart'
  }
</script>
<style lang="less" scoped>
  .cart{
    .db-login-href{
      text-decoration: none;
      color:#68cb78;
    }
    .db-login{
      background-color: #f8f8fe;
      padding:1rem;
      text-align: center;
      position:relative;
      &:after {
       content: '';
       position: absolute;
       left:-50%;
       bottom:0;
       width:200%;
       border-bottom: 1px solid #9a9a9a;
       transform: scale(0.5);
       }
       /*0.5border*/
      p{
        font-size:.36rem;
        color:#000;
      }
    }
    .db-login-box{
      padding:.6rem .4rem;
      text-align: center;
      border-bottom:1px solid #ccc;
      .db-login-top{
        color:#4a4a4a;
      }
      .db-login-a{
        display: block;
        padding: .4rem;
        .db-login-button{
          width:100%;
          font-size:.4rem;
          line-height:.6rem;
          box-sizing: border-box;
        }
      }
      .db-login-bottom{
        color:#9a9a9a;
        font-size:.4rem;
      }
    }
    .db-indent{
      padding:1.6rem .4rem;
      font-size:.3rem;
      text-align: center;
      color:#9a9a9a;
      a{
        display:inline-block;
        padding:.4rem;
        width:30%;
        box-sizing: border-box;
      }
    }
  }
</style>
