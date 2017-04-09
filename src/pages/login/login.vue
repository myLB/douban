<template>
  <div class="login">
    <div class="db-login-head">
      <span class="db-cancel-login" @click="cancel">取消</span>
      登录豆瓣
    </div>
    <div class="db-login-center">
      <el-input placeholder="邮箱/手机号/用户名" size="large"></el-input>
      <el-input placeholder="密码" size="large"></el-input>
      <el-button type="success" class="db-login-button">登录</el-button>
    </div>
    <div class="db-login-forgot">
      <p>使用其他方式登录 & 找回密码</p>
    </div>
    <div class="db-app">
      <a href="">注册豆瓣</a>
      <a href="">下载豆瓣App</a>
    </div>
  </div>
</template>
<script>
  export default {
      name:'login',
      methods:{
        cancel(){
            this.$router.go(-1);
        }
      }
  }
</script>
<style scoped lang="less">
  .login{
    .db-login-head{
      text-align: center;
      height:1.36rem;
      line-height: 1.36rem;
      font-size:.42rem;
      padding: 0 .4rem;
      position: relative;
      font-weight: 600;
      span{
        position: absolute;
        left:.4rem;
        top:0;
        font-size:.36rem;
        color: #68cb78;
      }
      &:after{
         content: '';
         position: absolute;
         left:-50%;
         bottom:0;
         width:200%;
         height:1px;
         background-color:#9a9a9a;
         transform: scale(0.5);
       }
    }
    .db-login-center{
      padding:.6rem .4rem;
      .db-login-button{
        margin-top:.4rem;
        width:100%;
        height:1.06rem;
        box-sizing: border-box;
      }
    }
    .db-login-forgot{
      text-align: center;
      font-size: .44rem;
      color: #9a9a9a;
      margin-bottom:1rem;
    }
    .db-app{
      text-align:center;
      a{
        display: inline-block;
        text-decoration: none;
        color: #68cb78;
        font-size:.36rem;
        margin: 0 .2rem;
      }
    }
  }
</style>
